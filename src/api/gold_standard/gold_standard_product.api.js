import { API } from '../api.js'

export const goldStandardProductApi = {
  index,
  list,
  listForMarketedProduct,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/products'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/products/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForMarketedProduct(credentials, marketed_product_id, params, onSuccess, onFailure) {
  if (!API.validateId('marketed product ID', marketed_product_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/marketed_products/${marketed_product_id}/products/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/products/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/products/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
