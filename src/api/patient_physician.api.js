import { API } from './api'
import { patientPhysicianHelper } from '../helpers/patient_physician.helper'

export const patientPhysicianApi = {
  buildNew,
  create,
  destroy,
  edit,
  listForPatient,
  profile,
  show,
  update
}

function toJSON(patientPhysician) {
  return {
    patient_physician: patientPhysicianHelper.toJSON(patientPhysician)
  }
}

function buildNew(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_physicians/new`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function create(credentials, patientPhysician, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patientPhysicianHelper.patientId(patientPhysician), onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${patientPhysicianHelper.patientId(patientPhysician)}/patient_physicians`
  API.perform(method, path, '', credentials, toJSON(patientPhysician), onSuccess, onFailure)
}

function destroy(credentials, patient_physician_id, onSuccess, onFailure) {
  if (!API.validateId('patient physician ID', patient_physician_id, onFailure)) {
    return
  }

  const method = 'DELETE'
  const path = `/patient_physicians/${patient_physician_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function edit(credentials, patient_physician_id, onSuccess, onFailure) {
  if (!API.validateId('patient physician ID', patient_physician_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_physician_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_physicians/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, patient_physician_id, onSuccess, onFailure) {
  if (!API.validateId('patient physician ID', patient_physician_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_physician_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, patient_physician_id, onSuccess, onFailure) {
  if (!API.validateId('patient physician ID', patient_physician_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_physician_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, patientPhysician, onSuccess, onFailure) {
  if (!API.validateId('patient physician ID', patientPhysicianHelper.id(patientPhysician), onFailure)) {
    return
  }

  const method = 'PUT'
  const path = `/patient_physicians/${patientPhysicianHelper.id(patientPhysician)}`
  API.perform(method, path, '', credentials, toJSON(patientPhysician), onSuccess, onFailure)
}
