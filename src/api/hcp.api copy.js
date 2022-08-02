import { API } from './api'

export const hcpApi = {
  list,
  search,
  show
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/physicians/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/physicians/search'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('physician ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/physicians/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
