import { API } from './api'

export const interventionApi = {
  list,
  listForPatient,
  listForPharmacyStore,
  profile,
  show
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/${patient_id}/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
