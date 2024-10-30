import { API } from '../'

export const goldStandardDrugItemApi = {
  index,
  list,
  listForProduct,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/drug_items'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/drug_items/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForProduct(credentials, product_id, params, onSuccess, onFailure) {
  if (!API.validateId('product ID', product_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/products/${product_id}/drug_items/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('drug item ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/drug_items/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('drug item ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/drug_items/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
