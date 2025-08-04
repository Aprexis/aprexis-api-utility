import { API } from './api.js'

export const healthPlanApi = {
  index,
  list,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/health_plans'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/health_plans/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
