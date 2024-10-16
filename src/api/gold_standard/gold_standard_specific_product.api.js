import { API } from '../'

export const goldStandardSpecificProductApi = {
  index,
  list,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/specific_products'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/specific_products/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('specific product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/specific_products/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('specific product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/specific_products/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
