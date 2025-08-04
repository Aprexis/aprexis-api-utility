import { fieldHelper } from './field.helper.js'
import { healthPlanHelper } from './health_plan.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const healthPlanPatientSearchAlgorithmHelper = {
  ...idHelper,
  ...modelDatesHelper,
  batches,
  canDelete,
  canEdit,
  healthPlan,
  healthPlanId,
  healthPlanName,
  lastRun,
  name,
  type
}

function batches(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'batches')
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

function healthPlan(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'health_plan')
}

function healthPlanId(healthPlanPatientSearchAlgorithm) {
  return idHelper.associatedId(healthPlanPatientSearchAlgorithm, 'health_plan', healthPlanPatientSearchAlgorithmHelper)
}

function healthPlanName(healthPlanPatientSearchAlgorithm) {
  return healthPlanHelper.name(healthPlanPatientSearchAlgorithmHelper.healthPlan(healthPlanPatientSearchAlgorithm))
}

function name(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'name')
}

function type(healthPlanPatientSearchAlgorithm) {
  return fieldHelper.getField(healthPlanPatientSearchAlgorithm, 'type')
}
