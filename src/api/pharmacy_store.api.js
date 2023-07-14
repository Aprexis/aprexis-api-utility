import { API } from './api'

export const pharmacyStoreApi = {
  index,
  indexForPatient,
  indexForPharmacyChain,
  indexForUser,
  list,
  listForPatient,
  listForPharmacyChain,
  listForUser,
  search,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = "GET"
  const path = "/pharmacy_stores"
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId("patient ID", patient_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/patients/${patient_id}/pharmacy_stores`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPharmacyChain(credentials, pharmacy_chain_id, params, onSuccess, onFailure) {
  if (!API.validateId("pharmacy chain ID", pharmacy_chain_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/pharmacies/${pharmacy_chain_id}/pharmacy_stores`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForUser(credentials, user_id, params, onSuccess, onFailure) {
  if (!API.validateId("user ID", user_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/admin/users/${user_id}/pharmacy_stores`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = "GET"
  const path = "/pharmacy_stores/list"
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId("patient ID", patient_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/patients/${patient_id}/pharmacy_stores/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyChain(credentials, pharmacy_chain_id, params, onSuccess, onFailure) {
  if (!API.validateId("pharmacy chain ID", pharmacy_chain_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/pharmacies/${pharmacy_chain_id}/pharmacy_stores/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForUser(credentials, user_id, params, onSuccess, onFailure) {
  if (!API.validateId("user ID", user_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/admin/users/${user_id}/pharmacy_stores/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = "GET"
  const path = "/pharmacy_stores/search"
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId("pharmacy store ID", id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/pharmacy_stores/${id}`
  API.perform(method, path, "", credentials, undefined, onSuccess, onFailure)
}
