import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { apiHelper } from './api.helper'
import { patientHelper } from './patient.helper'
import { pharmacyStoreHelper } from './pharmacy_store.helper'
import { userHelper } from './user.helper'
import { medicationHelper } from './admin/medication.helper'
import { physicianHelper } from './admin/physician.helper'
import { patientMedications } from '../types/patient_medications.type'
import { dateHelper } from './date.helper'

export const patientMedicationHelper = {
  ...idHelper,
  additionalInformation,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  changeMedication,
  changePharmacyStore,
  changePhysician,
  daysSupply,
  directions,
  displayFilledAt,
  displayFilledOn,
  displayHasPreviousFill,
  displayStrength,
  displayType,
  filledAt,
  hasPreviousFill,
  healthPlanId,
  indication,
  label,
  medication,
  medicationId,
  medicationLabel,
  mpr,
  patient,
  patientName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  pharmacyStoreName,
  physician,
  physicianId,
  physicianName,
  physicianNameAndNpi,
  startDate,
  strength,
  strengthUnits,
  toJSON,
  type,
  uploadExternalMedical,
  user,
  userId
}

const patientMedicationEditableFields = [
  'additional_information',
  'days_supply',
  'directions',
  'filled_at',
  'indication',
  'start_date',
  'strength',
  'strength_units'
]

const patientMedicationKeys = [
  'id',
  'additional_information',
  'days_supply',
  'directions',
  'filled_at',
  'indication',
  'medication_id',
  'patient_id',
  'pharmacy_store_id',
  'physician_id',
  'start_date',
  'strength',
  'strength_units',
  'type'
]

function additionalInformation(patientMedication) {
  return fieldHelper.getField(patientMedication, 'additional_information')
}

function buildChanged(patientMedication, changedPatientMedication) {
  if (valueHelper.isValue(changedPatientMedication)) {
    return changedPatientMedication
  }

  if (valueHelper.isValue(patientMedication.id)) {
    return copyIdentifiers(patientMedication)
  }

  return patientMedicationHelper.buildNewChanged(patientMedication)

  function copyIdentifiers(patientMedication) {
    return {
      id: patientMedication.id,
      medication_id: patientMedication.medication_id,
      patient_id: patientMedication.patient_id,
      type: patientMedication.type
    }
  }
}

function buildNewChanged(patientMedication) {
  return {
    ...patientMedication
  }
}

function canDelete(_user, _patientMedication) {
  return false
}

function canEdit(user, patientMedication) {
  if (valueHelper.isValue(patientMedicationHelper.uploadExternalMedical(patientMedication))) {
    return false
  }

  switch (userHelper.role(user)) {
    case 'aprexis_admin':
      return true

    case 'health_plan_admin':
    case 'health_plan_user':
      return userHelper.forHealthPlan(user, patientMedicationHelper.healthPlanId(patientMedication))

    // For now at least, we won't restrict these users.
    case 'pharmacy_store_admin':
    case 'pharmacy_store_tech':
    case 'pharmacy_store_user':
      return true
    //return userHelper.forPharmacyStore(user, patientMedicationHelper.pharmacyStoreId(patientMedication))

    default:
      return false
  }
}

function canModifyField(patientMedication, fieldName) {
  if (!valueHelper.isValue(patientMedicationHelper.id(patientMedication))) {
    return true
  }

  return (patientMedicationEditableFields.includes(fieldName))
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('patientMedication', model, changedModel, fieldName, newValue)
}

function changeMedication(patientMedication, changedPatientMedication, medication) {
  const myChangedPatientMedication = this.buildChanged(patientMedication, changedPatientMedication)

  return {
    patientMedication: {
      ...patientMedication,
      medication_id: medication.id,
      medication
    },
    changedPatientMedication: {
      ...myChangedPatientMedication,
      medication_id: medication.id,
      medication
    }
  }
}

function changePharmacyStore(patientMedication, changedPatientMedication, pharmacyStore) {
  const myChangedPatientMedication = this.buildChanged(patientMedication, changedPatientMedication)

  return {
    patientMedication: {
      ...patientMedication,
      pharmacy_store_id: pharmacyStore.id,
      pharmacyStore
    },
    changedPatientMedication: {
      ...myChangedPatientMedication,
      pharmacy_store_id: pharmacyStore.id,
      pharmacyStore
    }
  }
}

function changePhysician(patientMedication, changedPatientMedication, physician) {
  const myChangedPatientMedication = this.buildChanged(patientMedication, changedPatientMedication)

  return {
    patientMedication: {
      ...patientMedication,
      physician_id: physician.id,
      physician
    },
    changedPatientMedication: {
      ...myChangedPatientMedication,
      physician_id: physician.id,
      physician
    }
  }
}

function daysSupply(patientMedication) {
  return fieldHelper.getField(patientMedication, 'days_supply')
}

function directions(patientMedication) {
  return fieldHelper.getField(patientMedication, 'directions')
}

function displayFilledAt(patientMedication) {
  const filledAt = patientMedicationHelper.filledAt(patientMedication)
  if (!valueHelper.isValue(filledAt)) {
    return ''
  }

  return dateHelper.displayDateTime(filledAt)
}

function displayFilledOn(patientMedication) {
  const filledAt = patientMedicationHelper.filledAt(patientMedication)
  if (!valueHelper.isValue(filledAt)) {
    return ''
  }

  return dateHelper.displayDate(filledAt)
}

function displayHasPreviousFill(patientMedication) {
  return valueHelper.yesNo(patientMedicationHelper.hasPreviousFill(patientMedication))
}

function displayStrength(patientMedication) {
  const strength = patientMedicationHelper.strength(patientMedication)
  const strengthUnits = patientMedicationHelper.strengthUnits(patientMedication)
  if (!valueHelper.isValue(strength)) {
    return strengthUnits
  }
  if (!valueHelper.isValue(strengthUnits)) {
    return strength
  }

  const strengthParts = strength.split(',')
  const strengthUnitsParts = strengthUnits.split(',')
  return strengthParts.map(
    (strengthPart, idx) => {
      const strengthUnitPart = idx < strengthUnitsParts.length ? strengthUnitsParts[idx] : ''
      return `${strengthPart} ${strengthUnitPart}`
    }
  ).join(', ')
}

function displayType(patientMedication) {
  const type = patientMedicationHelper.type(patientMedication)
  if (!valueHelper.isValue(type)) {
    return
  }

  const typeLabel = patientMedications[type]
  if (!valueHelper.isValue(typeLabel)) {
    return type
  }

  return typeLabel
}

function filledAt(patientMedication) {
  return fieldHelper.getField(patientMedication, 'filled_at')
}

function hasPreviousFill(patientMedication) {
  return fieldHelper.getField(patientMedication, 'has_previous_fill')
}

function healthPlanId(patientMedication) {
  return patientHelper.healthPlanId(patientMedicationHelper.patient(patientMedication))
}

function indication(patientMedication) {
  return fieldHelper.getField(patientMedication, 'indication')
}

function label(patientMedication) {
  if (!valueHelper.isValue(patientMedication)) {
    return ''
  }

  return `${patientMedicationHelper.medicationLabel(patientMedication)} filled at ${patientMedicationHelper.displayFilledAt(patientMedication)}`
}

function medication(patientMedication) {
  return fieldHelper.getField(patientMedication, 'medication')
}

function medicationId(patientMedication) {
  return fieldHelper.getField(patientMedication, 'medication_id')
}

function medicationLabel(patientMedication) {
  return medicationHelper.label(patientMedicationHelper.medication(patientMedication))
}

function mpr(patientMedication) {
  return fieldHelper.getField(patientMedication, 'mpr')
}

function patient(patientMedication) {
  return fieldHelper.getField(patientMedication, 'patient')
}

function patientName(patientMedication, prefix = '') {
  return patientHelper.name(patientMedicationHelper.patient(patientMedication), prefix)
}

function pharmacyStore(patientMedication) {
  return fieldHelper.getField(patientMedication, 'pharmacy_store')
}

function pharmacyStoreId(patientMedication) {
  return fieldHelper.getField(patientMedication, 'pharmacy_store_id')
}

function pharmacyStoreIdentification(patientMedication) {
  return pharmacyStoreHelper.identification(patientMedicationHelper.pharmacyStore(patientMedication))
}

function pharmacyStoreName(patientMedication) {
  return pharmacyStoreHelper.name(patientMedicationHelper.pharmacyStore(patientMedication))
}

function physician(patientMedication) {
  return fieldHelper.getField(patientMedication, 'physician')
}

function physicianId(patientMedication) {
  return fieldHelper.getField(patientMedication, 'physician_id')
}

function physicianName(patientMedication) {
  return physicianHelper.name(patientMedicationHelper.physician(patientMedication))
}

function physicianNameAndNpi(patientMedication) {
  return physicianHelper.nameAndNpi(patientMedicationHelper.physician(patientMedication))
}

function startDate(patientMedication) {
  return fieldHelper.getField(patientMedication, 'start_date')
}

function strength(patientMedication) {
  return fieldHelper.getField(patientMedication, 'strength')
}

function strengthUnits(patientMedication) {
  return fieldHelper.getField(patientMedication, 'strength_units')
}

function toJSON(patientMedication) {
  return apiHelper.toJSON(patientMedication, patientMedicationKeys)
}

function type(patientMedication) {
  return fieldHelper.getField(patientMedication, 'type')
}

function uploadExternalMedical(patientMedication) {
  return fieldHelper.getField(patientMedication, 'upload_external_medical')
}

function user(patientMedication) {
  return fieldHelper.getField(patientMedication, 'user')
}

function userId(patientMedication) {
  return userHelper.id(patientMedicationHelper.user(patientMedication))
}
