import { API } from './api'

export const userApi = {
  account,
  actAs,
  index,
  indexForHealthPlan,
  show
}

function account(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('user ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${id}/account`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function actAs(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('user ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${id}/act_as`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/users'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/users`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('user ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
