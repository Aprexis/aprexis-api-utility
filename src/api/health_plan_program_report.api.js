import { API } from './api'

export const healthPlanProgramReportApi = {
  indexForHealthPlan,
  listForHealthPlan,
  profile,
  show
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/health_plan_program_reports`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/health_plan_program_reports/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('health plan program report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plan_program_reports/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}


function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('health plan program report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plan_program_reports/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
