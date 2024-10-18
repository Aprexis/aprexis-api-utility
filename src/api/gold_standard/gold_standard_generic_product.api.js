import { API } from '../'

export const goldStandardGenericProductApi = {
  index,
  list,
  listForGenericProductClinical,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/generic_products'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/generic_products/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForGenericProductClinical(credentials, generic_product_clinical_id, params, onSuccess, onFailure) {
  if (!API.validateId('generic product clinical ID', generic_product_clinical_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/generic_product_clinicals/${generic_product_clinical_id}/generic_products/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('generic product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/generic_products/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('generic product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/generic_products/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
