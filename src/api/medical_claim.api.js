import { API } from './api'

export const medicalClaimApi = {
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
  const path = `/patients/${patient_id}/medical_claims`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/medical_claims/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('medical claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/medical_claims/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('medical claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/medical_claims/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
