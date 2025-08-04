import { API } from '../api.js'

export const placeOfServiceApi = {
  index,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/admin/places_of_service'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('place of service ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/places_of_service/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
