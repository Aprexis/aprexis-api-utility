import { physicianHelper } from './admin'
import { dateHelper } from './date.helper'
import { fieldHelper } from './field.helper'
import { interventionHelper } from './intervention.helper'
import { valueHelper } from './value.helper'
import { userHelper } from './user.helper'
import { faxDeliveryStatuses } from '../types'
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

export const faxHelper = {
  ...idHelper,
  ...modelDatesHelper,
  attachableType,
  canDelete,
  canEdit,
  createdAt,
  dateOfService,
  deliveryStatus,
  displayDateOfService,
  displayDeliveryStatus,
  faxableType,
  faxNumberTo,
  intervention,
  interventionId,
  patientName,
  physician,
  physicianId,
  physicianName,
  programName,
  user,
  userFullName
}

function attachableType(fax) {
  return fieldHelper.getField(fax, 'attachable_type')
}

function canDelete(_user, _fax) {
  return false
}

function canEdit(_user, _fax) {
  return false
}

function createdAt(fax) {
  return fieldHelper.getField(fax, 'created_at')
}

function dateOfService(fax) {
  return interventionHelper.dateOfService(faxHelper.intervention(fax))
}

function deliveryStatus(fax) {
  return fieldHelper.getField(fax, 'delivery_status')
}

function displayDateOfService(fax) {
  const dateOfService = faxHelper.dateOfService(fax)
  if (!dateHelper.isDateValue(dateOfService)) {
    return
  }

  return dateHelper.displayDate(dateOfService)
}

function displayDeliveryStatus(fax) {
  const deliveryStatus = faxHelper.deliveryStatus(fax)
  if (!valueHelper.isStringValue(deliveryStatus)) {
    return
  }

  return faxDeliveryStatuses[deliveryStatus]
}

function faxableType(fax) {
  return fieldHelper.getField(fax, 'faxable_type')
}

function faxNumberTo(fax) {
  return fieldHelper.getField(fax, 'fax_number_to')
}

function intervention(fax) {
  if (faxHelper.faxableType(fax) != 'Intervention') {
    return
  }

  return fieldHelper.getField(fax, 'intervention')
}

function interventionId(fax) {
  return idHelper.associatedId(fax, 'intervention', faxHelper)
}

function patientName(fax) {
  return interventionHelper.patientName(faxHelper.intervention(fax))
}

function physician(fax) {
  if (faxHelper.attachableType(fax) != 'Physician') {
    return
  }

  return fieldHelper.getField(fax, 'physician')
}

function physicianId(fax) {
  return idHelper.associatedId(fax, 'physician', faxHelper)
}

function physicianName(fax) {
  return physicianHelper.name(faxHelper.physician(fax))
}

function programName(fax) {
  return interventionHelper.programName(faxHelper.intervention(fax))
}

function user(fax) {
  return fieldHelper.getField(fax, 'user')
}

function userFullName(fax) {
  return userHelper.fullName(faxHelper.user(fax))
}
