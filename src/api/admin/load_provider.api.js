import { API } from '../api.js'

export const loadProviderApi = {
  index
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/load_providers'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
