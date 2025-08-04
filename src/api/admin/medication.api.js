import { API } from '../api.js'

export const medicationApi = {
  index,
  list,
  profile,
  search,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/medications'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/medications/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('medication ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/medications/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/medications/search'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('medication ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/medications/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
