import { API } from './api'

export const pharmacyReportApi = {
  indexForPharmacyChain,
  listForPharmacyChain,
  profile,
  show
}

function indexForPharmacyChain(credentials, pharmacy_chain_id, params, onSuccess, onFailure) {
  if (!API.validateId("pharmacy chain ID", pharmacy_chain_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/pharmacies/${pharmacy_chain_id}/pharmacy_reports`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyChain(credentials, pharmacy_chain_id, params, onSuccess, onFailure) {
  if (!API.validateId("pharmacy chain ID", pharmacy_chain_id, onFailure)) {
    return
  }

  const method = "GET"
  const path = `/pharmacies/${pharmacy_chain_id}/pharmacy_reports/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_reports/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_reports/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
