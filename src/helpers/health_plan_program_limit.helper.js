import { fieldHelper } from './field.helper'
import { healthPlanHelper } from './health_plan.helper'
import { valueHelper } from './value.helper'
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

export const healthPlanProgramLimitHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  displayProgramType,
  healthPlan,
  healthPlanId,
  healthPlanName,
  limitValue,
  programType
}

function canDelete(_user, _healthPlanProgramLimit) {
  return false
}

function canEdit(_user, _healthPlanProgramLimit) {
  return false
}

function displayProgramType(healthPlanProgramLimit) {
  const programType = healthPlanProgramLimitHelper.programType(healthPlanProgramLimit)
  if (!valueHelper.isStringValue(programType)) {
    return
  }

  return valueHelper.titleize(programType)
}

function healthPlan(healthPlanProgramLimit) {
  return fieldHelper.getField(healthPlanProgramLimit, 'health_plan')
}

function healthPlanId(healthPlanProgramLimit) {
  return idHelper.associatedId(healthPlanProgramLimit, 'health_plan', healthPlanProgramLimitHelper)
}

function healthPlanName(healthPlanProgramLimit) {
  return healthPlanHelper.name(healthPlanProgramLimitHelper.healthPlan(healthPlanProgramLimit))
}

function limitValue(healthPlanProgramLimit) {
  return fieldHelper.getField(healthPlanProgramLimit, 'limit_value')
}

function programType(healthPlanProgramLimit) {
  return fieldHelper.getField(healthPlanProgramLimit, 'program_type')
}
