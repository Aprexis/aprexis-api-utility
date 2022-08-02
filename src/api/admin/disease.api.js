import { API } from '../api'

export const diseaseApi = {
  index,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/diseases'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('disease ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/diseases/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
