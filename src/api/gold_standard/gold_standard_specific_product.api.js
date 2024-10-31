import { API } from '../'

export const goldStandardSpecificProductApi = {
  index,
  list,
  listForSpecificDrugProduct,
  listForTherapeuticConcept,
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

function listForSpecificDrugProduct(credentials, specific_drug_product_id, params, onSuccess, onFailure) {
  if (!API.validateId('specific drug product ID', specific_drug_product_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/specific_drug_products/${specific_drug_product_id}/specific_products/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForTherapeuticConcept(credentials, therapeutic_concept_id, params, onSuccess, onFailure) {
  if (!API.validateId('therapeutic concept ID', therapeutic_concept_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/therapeutic_concepts/${therapeutic_concept_id}/specific_products/list`
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
