import { API } from './api.js'

export const userApi = {
  account,
  actAs,
  changePassword,
  index,
  indexForHealthPlan,
  refreshToken,
  search,
  show,
  userForPatient,
  userSessionTimeout
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

function changePassword(credentials, id, currentPassword, newPassword, onSuccess, onFailure) {
  if (!API.validateId('user ID', id, onFailure)) {
    return
  }

  const method = 'PUT'
  const path = `/admin/users/${id}/change_password`
  API.perform(method, path, API.buildQueryString({ current_password: currentPassword, password: newPassword, password_confirmation: newPassword }), credentials, undefined, onSuccess, onFailure)
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

function refreshToken(credentials, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/users/refresh_token'
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/users/search'
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

function userForPatient(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onSuccess, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/user`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function userSessionTimeout(credentials, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/users/user_session_timeout'
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
