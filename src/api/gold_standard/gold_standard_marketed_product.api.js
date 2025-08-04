import { API } from '../api.js'

export const goldStandardMarketedProductApi = {
  index,
  list,
  listForSpecificProduct,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/marketed_products'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/marketed_products/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForSpecificProduct(credentials, specific_product_id, params, onSuccess, onFailure) {
  if (!API.validateId('specific product ID', specific_product_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/specific_products/${specific_product_id}/marketed_products/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('marketed product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/marketed_products/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('marketed product ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/marketed_products/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
