import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

export const healthPlanPatientSearchAlgorithmHelper = {
  ...idHelper,
  ...modelDatesHelper,
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
