import { API } from '../api'

export const labTestApi = {
  index,
  search,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/lab_tests'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/lab_tests/search'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('lab test ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/lab_tests/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
