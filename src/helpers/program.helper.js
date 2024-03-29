import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { healthPlanHelper } from './health_plan.helper'
import { modelDatesHelper } from './model_dates.helper'

export const programHelper = {
  ...idHelper,
  ...modelDatesHelper,
  active,
  canDelete,
  canEdit,
  display,
  endDate,
  healthPlan,
  healthPlanId,
  healthPlanName,
  kind,
  name,
  numberActiveInterventions,
  numberDryRuns,
  startDate,
  type
}

function active(program) {
  return valueHelper.isValue(program)
}

function canDelete(_user, _program) {
  return false
}

function canEdit(_user, _program) {
  return false
}

function display(program) {
  if (!valueHelper.isValue(program)) {
    return '(no program)'
  }

  return `${programHelper.name(program)} (${programHelper.type(program)})`
}

function endDate(program) {
  return fieldHelper.getField(program, 'end_date')
}

function healthPlan(program) {
  return fieldHelper.getField(program, 'health_plan')
}

function healthPlanId(program) {
  return idHelper.associatedId(program, 'health_plan', programHelper)
}

function healthPlanName(program) {
  return healthPlanHelper.name(programHelper.healthPlan(program))
}

function kind(program) {
  return fieldHelper.getField(program, 'kind')
}

function name(program) {
  return valueHelper.titleize(fieldHelper.getField(program, 'name'), true)
}

function numberActiveInterventions(program) {
  return fieldHelper.getField(program, 'number_active_interventions')
}

function numberDryRuns(program) {
  return fieldHelper.getField(program, 'number_dry_runs')
}

function startDate(program) {
  return fieldHelper.getField(program, 'start_date')
}

function type(program) {
  return valueHelper.titleize(fieldHelper.getField(program, 'type'), true)
}
