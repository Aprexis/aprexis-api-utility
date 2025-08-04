import { API } from './api.js'
import { patientAllergyHelper } from '../helpers/patient_allergy.helper.js'

export const patientAllergyApi = {
  buildNew,
  create,
  destroy,
  edit,
  indexForPatient,
  listForPatient,
  profile,
  show,
  update
}

function toJSON(patientAllergy) {
  return {
    patient_allergy: patientAllergyHelper.toJSON(patientAllergy)
  }
}

function buildNew(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_allergies/new`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function destroy(credentials, patient_allergy_id, onSuccess, onFailure) {
  if (!API.validateId('patient allergy ID', patient_allergy_id, onFailure)) {
    return
  }

  const method = 'DELETE'
  const path = `/patient_allergies/${patient_allergy_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function create(credentials, patientAllergy, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patientAllergy.patient_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${patientAllergy.patient_id}/patient_allergies`
  API.perform(method, path, '', credentials, toJSON(patientAllergy), onSuccess, onFailure)
}

function edit(credentials, patient_allergy_id, onSuccess, onFailure) {
  if (!API.validateId('patient allergy ID', patient_allergy_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_allergies/${patient_allergy_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_allergies`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_allergies/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, patient_allergy_id, onSuccess, onFailure) {
  if (!API.validateId('patient allergy ID', patient_allergy_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_allergies/${patient_allergy_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, patient_allergy_id, onSuccess, onFailure) {
  if (!API.validateId('patient allergy ID', patient_allergy_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_allergies/${patient_allergy_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, patientAllergy, onSuccess, onFailure) {
  if (!API.validateId('patient allergy ID', patientAllergy.id, onFailure)) {
    return
  }

  const method = 'PUT'
  const path = `/patient_allergies/${patientAllergy.id}`
  API.perform(method, path, '', credentials, toJSON(patientAllergy), onSuccess, onFailure)
}
