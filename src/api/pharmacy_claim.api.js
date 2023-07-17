import { API } from './api'

export const pharmacyClaimApi = {
  indexForPatient,
  listForPatient,
  profile,
  show
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/pharmacy_claims`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/pharmacy_claims/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_claims/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_claims/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
