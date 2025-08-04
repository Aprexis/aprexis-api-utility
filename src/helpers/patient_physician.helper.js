import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { apiHelper } from './api.helper.js'
import { patientHelper } from './patient.helper.js'
import { userHelper } from './user.helper.js'
import { physicianHelper } from './admin/physician.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'
import { idHelper } from './id.helper.js'

export const patientPhysicianHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  changePhysician,
  patient,
  patientId,
  patientName,
  physician,
  physicianId,
  physicianLabel,
  physicianName,
  physicianNpi,
  primary,
  toJSON
}

const patientPhysicianEditableFields = [
  'primary'
]

const patientPhysicianKeys = [
  'id',
  'patient_id',
  'physician_id',
  'primary'
]

function buildChanged(patientPhysician, changedPatientPhysician) {
  if (valueHelper.isValue(changedPatientPhysician)) {
    return changedPatientPhysician
  }

  if (valueHelper.isValue(patientPhysician.id)) {
    return copyIdentifiers(patientPhysician)
  }

  return patientPhysicianHelper.buildNewChanged(patientPhysician)

  function copyIdentifiers(patientPhysician) {
    return {
      id: patientPhysician.id,
      physician_id: patientPhysician.physician_id,
      patient_id: patientPhysician.patient_id
    }
  }
}

function buildNewChanged(patientPhysician) {
  return {
    ...patientPhysician
  }
}

function canDelete(user, _patientPhysician) {
  return userHelper.hasRole(
    user,
    [
      'aprexis_admin',
      'health_plan_admin',
      'health_plan_user',
      'pharmacy_store_admin',
      'pharmacy_store_tech',
      'pharmacy_store_user'
    ]
  )
}

function canEdit(user, _patientPhysician) {
  return userHelper.hasRole(
    user,
    [
      'aprexis_admin',
      'health_plan_admin',
      'health_plan_user',
      'pharmacy_store_admin',
      'pharmacy_store_tech',
      'pharmacy_store_user'
    ]
  )
}

function canModifyField(patientPhysician, fieldName) {
  if (!valueHelper.isValue(patientPhysicianHelper.id(patientPhysician))) {
    return true
  }

  return (patientPhysicianEditableFields.includes(fieldName))
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('patientPhysician', model, changedModel, fieldName, newValue)
}

function changePhysician(patientPhysician, changedPatientPhysician, physician) {
  const myChangedPatientPhysician = this.buildChanged(patientPhysician, changedPatientPhysician)

  return {
    patientPhysician: {
      ...patientPhysician,
      physician_id: physician.id,
      physician
    },
    changedPatientPhysician: {
      ...myChangedPatientPhysician,
      physician_id: physician.id,
      physician
    }
  }
}

function patient(patientPhysician) {
  return fieldHelper.getField(patientPhysician, 'patient')
}

function patientId(patientPhysician) {
  return idHelper.associatedId(patientPhysician, 'patient', patientPhysicianHelper)
}

function patientName(patientPhysician) {
  return patientHelper.name(patientPhysicianHelper.patient(patientPhysician))
}

function physician(patientPhysician) {
  return fieldHelper.getField(patientPhysician, 'physician')
}

function physicianId(patientPhysician) {
  return idHelper.associatedId(patientPhysician, 'physician', patientPhysicianHelper)
}

function physicianName(patientPhysician) {
  return physicianHelper.name(patientPhysicianHelper.physician(patientPhysician))
}

function physicianLabel(patientPhysician) {
  return physicianHelper.label(patientPhysicianHelper.physician(patientPhysician))
}

function physicianNpi(patientPhysician) {
  return physicianHelper.npi(patientPhysicianHelper.physician(patientPhysician))
}

function primary(patientPhysician) {
  return fieldHelper.getField(patientPhysician, 'primary')
}

function toJSON(patientPhysician) {
  return apiHelper.toJSON(patientPhysician, patientPhysicianKeys)
}
