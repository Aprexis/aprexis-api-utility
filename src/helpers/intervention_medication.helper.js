import { medicationHelper } from './admin/medication.helper.js'
import { fieldHelper } from './field.helper.js'
import { interventionHelper } from './intervention.helper.js'
import { valueHelper } from './value.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const interventionMedicationHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  displayType,
  intervention,
  interventionId,
  interventionIdentification,
  medication,
  medicationId,
  medicationLabel,
  medicationText,
  patientName,
  pharmacyStoreIdentification,
  type
}

function canDelete(_user, _interventionMedication) {
  return false
}

function canEdit(_user, _interventionMedication) {
  return false
}

function displayType(interventionMedication) {
  return valueHelper.titleize(interventionMedicationHelper.type(interventionMedication))
}

function intervention(interventionMedication) {
  return fieldHelper.getField(interventionMedication, 'intervention')
}

function interventionId(interventionMedication) {
  return idHelper.associatedId(interventionMedication, 'intervention', interventionMedicationHelper)
}

function interventionIdentification(interventionMedication) {
  return interventionHelper.identification(interventionMedicationHelper.intervention(interventionMedication))
}

function medication(interventionMedication) {
  return fieldHelper.getField(interventionMedication, 'medication')
}

function medicationId(interventionMedication) {
  return idHelper.associatedId(interventionMedication, 'medication', interventionMedicationHelper)
}

function medicationLabel(interventionMedication) {
  return medicationHelper.label(interventionMedicationHelper.medication(interventionMedication))
}

function medicationText(interventionMedication) {
  return fieldHelper.getField(interventionMedication, 'medication_text')
}

function patientName(interventionMedication) {
  return interventionHelper.patientName(interventionMedicationHelper.intervention(interventionMedication))
}

function pharmacyStoreIdentification(interventionMedication) {
  return interventionHelper.pharmacyStoreIdentification(interventionMedicationHelper.intervention(interventionMedication))
}

function type(interventionMedication) {
  return fieldHelper.getField(interventionMedication, 'type')
}
