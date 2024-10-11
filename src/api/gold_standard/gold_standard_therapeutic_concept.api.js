import { API } from '../api'

export const goldStandardTherapeuticConceptApi = {
  childrenOf,
  index,
  parentsOf,
  show
}

function childrenOf(credentials, parent_concept_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/gold_standard/therapeutic_concepts/${parent_concept_id}/children`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/therapeutic_concepts'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function parentsOf(credentials, child_concept_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/gold_standard/therapeutic_concepts/${child_concept_id}/parents`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('therapeutic concept ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/therapeutic_concepts/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
