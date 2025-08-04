import { fieldHelper } from '../field.helper.js'
import { idHelper } from '../id.helper.js'
import { medicationHelper } from './medication.helper.js'

export const conditionMedicationHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  condition,
  medication,
  medicationId,
  medicationLabel,
  tag
}

function canDelete(_user, _conditionMedication) {
  return false
}

function canEdit(_user, _conditionMedication) {
  return false
}

function condition(conditionMedication) {
  return fieldHelper.getField(conditionMedication, 'condition')
}

function medication(conditionMedication) {
  return fieldHelper.getField(conditionMedication, 'medication')
}

function medicationId(conditionMedication) {
  return idHelper.associatedId(conditionMedication, 'medication', conditionMedicationHelper)
}

function medicationLabel(conditionMedication) {
  return medicationHelper.label(conditionMedicationHelper.medication(conditionMedication))
}

function tag(conditionMedication) {
  return fieldHelper.getField(conditionMedication, 'tag')
}
