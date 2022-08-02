import { API } from '../api'

export const systemSettingApi = {
  index
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/system_settings'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
