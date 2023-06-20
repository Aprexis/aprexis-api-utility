import { fieldHelper } from './field.helper'
import { healthPlanHelper } from "./health_plan.helper"
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

export const healthPlanPatientSearchAlgorithmHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  healthPlan,
  healthPlanId,
  healthPlanName,
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
