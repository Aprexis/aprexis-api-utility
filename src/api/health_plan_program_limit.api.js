import { API } from './api.js'

export const healthPlanProgramLimitApi = {
  indexForHealthPlan,
  listForHealthPlan
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/health_plan_program_limits`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/health_plan_program_limits/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
