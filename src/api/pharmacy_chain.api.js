import { API } from './api.js'

export const pharmacyChainApi = {
  index,
  list,
  search,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/pharmacies'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/pharmacies/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/pharmacies/search'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy chain ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacies/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
