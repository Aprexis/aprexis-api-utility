import { API } from '../api'

export const nadacApi = {
  index,
  list,
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/nadacs'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/nadacs/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
