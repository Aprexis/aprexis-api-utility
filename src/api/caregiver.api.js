import { API } from './api.js'
import { caregiverHelper } from '../helpers/caregiver.helper.js'

function toJSON(caregiver) {
  return {
    caregiver: caregiverHelper.toJSON(caregiver)
  }
}

export const caregiverApi = {
  buildNew,
  create,
  destroy,
  edit,
  indexForPatient,
  listForPatient,
  profile,
  searchForPatient,
  show,
  update
}

function buildNew(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/caregivers/new`
  API.perform(
    method,
    path,
    '',
    credentials,
    undefined,
    onSuccess,
    onFailure
  )
}

function create(credentials, caregiver, onSuccess, onFailure) {
  if (!API.validateId('patient ID', caregiver.patient_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${caregiver.patient_id}/caregivers`
  API.perform(method, path, '', credentials, toJSON(caregiver), onSuccess, onFailure)
}

function destroy(credentials, caregiver_id, onSuccess, onFailure) {
  const method = 'DELETE'
  const path = `/caregivers/${caregiver_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('caregiver ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/caregivers/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/caregivers`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/caregivers/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('caregiver ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/caregivers/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function searchForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/caregivers/search`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('caregiver ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/caregivers/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, caregiver, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/caregivers/${caregiver.id}`
  API.perform(method, path, '', credentials, toJSON(caregiver), onSuccess, onFailure)
}
