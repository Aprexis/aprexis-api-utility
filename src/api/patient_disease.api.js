import { API } from './api'

export const patientDiseaseApi = {
  listForPatient,
  profile,
  show
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_diseases/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, patient_disease_id, onSuccess, onFailure) {
  if (!API.validateId('patient disease ID', patient_disease_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_diseases/${patient_disease_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, patient_disease_id, onSuccess, onFailure) {
  if (!API.validateId('patient disease ID', patient_disease_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_diseases/${patient_disease_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
