import { fieldHelper } from '../field.helper'
import { idHelper } from '../id.helper'
import { addressHelper } from '../address.helper'
import { dateHelper } from '../date.helper'
import { nameHelper } from '../name.helper'
import { valueHelper } from '../value.helper'
import { modelDatesHelper } from '../model_dates.helper'

export const physicianHelper = {
  ...idHelper,
  ...valueHelper.filterHash(addressHelper, { excludeKeys: ['keys'] }),
  ...modelDatesHelper,
  ...valueHelper.filterHash(nameHelper, { excludeKeys: ['name'] }),
  businessFax,
  businessPhone,
  canDelete,
  canEdit,
  clinic,
  credentials,
  displayNpiDeactivationDate,
  displayNpiReactivationDate,
  einNumber,
  label,
  name,
  nameAndNpi,
  npi,
  npiDeactivationDate,
  npiDeactivationReasonCode,
  npiReactivationDate,
  phone,
  phoneExtension,
  practiceSpecialty,
  providerLastUpdateDate,
  sourceId,
  source,
  sourceNotes,
  sourceType
}

function businessFax(physician) {
  return fieldHelper.getField(physician, 'business_fax')
}

function businessPhone(physician) {
  return fieldHelper.getField(physician, 'business_phone')
}

function canDelete(_user, _physician) {
  return false
}

function canEdit(_user, _physician) {
  return false
}

function clinic(physician) {
  return fieldHelper.getField(physician, 'clinic')
}

function credentials(physician) {
  return fieldHelper.getField(physician, 'credentials')
}

function displayNpiDeactivationDate(physician) {
  const npiDeactivationDate = physicianHelper.npiDeactivationDate(physician)

  return dateHelper.displayDate(npiDeactivationDate)
}

function displayNpiReactivationDate(physician) {
  const npiDeactivationDate = physicianHelper.npiReactivationDate(physician)

  return dateHelper.displayDate((npiDeactivationDate))
}

function einNumber(physician) {
  return fieldHelper.getField(physician, 'ein_number')
}

function label(physician) {
  if (!valueHelper.isValue(physician)) {
    return ''
  }

  return `${physicianHelper.nameAndNpi(physician)}`
}

function name(physician, prefix = '') {
  return nameHelper.name(physician, 'physician', prefix)
}

function nameAndNpi(physician) {
  if (!valueHelper.isValue(physician)) {
    return ''
  }

  return `${physicianHelper.name(physician)} [${physicianHelper.npi(physician)}]`
}

function npi(physician) {
  return fieldHelper.getField(physician, 'npi')
}

function npiDeactivationDate(physician) {
  return fieldHelper.getField(physician, 'npi_deactivation_date')
}

function npiDeactivationReasonCode(pysician) {
  return fieldHelper.getField(pysician, 'npi_deactivation_reason_code')
}

function npiReactivationDate(physician) {
  return fieldHelper.getField(physician, 'npi_reactivation_date')
}

function phone(physician) {
  return fieldHelper.getField(physician, 'phone')
}

function phoneExtension(physician) {
  return fieldHelper.getField(physician, 'phone_extension')
}

function practiceSpecialty(physician) {
  return fieldHelper.getField(physician, 'practice_specialty')
}

function providerLastUpdateDate(physician) {
  return fieldHelper.getField(physician, 'provider_last_update_date')
}

function source(physician) {
  return fieldHelper.getField(physician, 'source')
}

function sourceId(physician) {
  return idHelper.associatedId(physician, 'source', physicianHelper)
}

function sourceNotes(physician) {
  return fieldHelper.getField(physician, 'source_notes')
}

function sourceType(physician) {
  return fieldHelper.getField(physician, 'source_type')
}
