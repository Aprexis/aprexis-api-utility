import { API } from '../api.js'

export const potentiallyInappropriateMedicationApi = {
  index,
  list,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/potentially_inappropriate_medications'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/potentially_inappropriate_medications/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('potentially inappropriate medication ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/potentially_inappropriate_medications/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('potentially inappropriate medication ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/potentially_inappropriate_medications/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
