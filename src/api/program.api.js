import { API } from './api'

export const programApi = {
  index,
  indexForHealthPlan,
  list,
  listForHealthPlan,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/programs'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/programs`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/programs/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/programs/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('program ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}


function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('program ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
