import { API } from '../api'

export const goldStandardAllergyApi = {
  match_name,
  search,
  show
}

function match_name(credentials, allergyName, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/gold_standard/allergies/match_name?allergy_name=${allergyName}`
  API.perform(method, path, '', userCredentials, undefined, onSuccess, onFailure)
}

function search(userCredentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/allergies/search'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('Gold Standard allergy ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/allergies/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
