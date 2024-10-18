import { API } from '../'

export const goldStandardGenericProductClinicalApi = {
  index,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/generic_product_clinicals'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('generic product clinical ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/generic_product_clinicals/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
