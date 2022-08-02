import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'

export const healthPlanPatientSearchAlgorithmHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  lastRun,
  name,
  type
}

function canDelete(_user, _healthPlanPatientSearchAlgorithm) {
  return false
}

function canEdit(_user, _healthPlanPatientSearchAlgorithm) {
  return false
}

function lastRun(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'last_run')
}

function name(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'name')
}

function type(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'type')
}
