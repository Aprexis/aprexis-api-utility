import { API } from './api'
import { patientHcpHelper } from '../helpers/patient.helper'

export const patientHcpApi = {
  buildNew,
  create,
  destroy,
  edit,
  listForPatient,
  profile,
  show,
  update
}

function toJSON(patientphysician) {
  return {
    patient_physician: patientHcpHelper.toJSON(patientphysician)
  }
}

function buildNew(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_physicians/new`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function destroy(credentials, patient_hcp_id, onSuccess, onFailure) {
  if (!API.validateId('patient HCP ID', patient_hcp_id, onFailure)) {
    return
  }

  const method = 'DELETE'
  const path = `/patient_physicians/${patient_hcp_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function create(credentials, patientHcp, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patientHcp.patient_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${patientHcp.patient_id}/patient_physicians`
  API.perform(method, path, '', credentials, toJSON(patientHcp), onSuccess, onFailure)
}

function edit(credentials, patient_hcp_id, onSuccess, onFailure) {
  if (!API.validateId('patient HCP ID', patient_hcp_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_hcp_id}/edit`
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

function profile(credentials, patient_hcp_id, onSuccess, onFailure) {
  if (!API.validateId('patient HCP ID', patient_hcp_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_hcp_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, patient_hcp_id, onSuccess, onFailure) {
  if (!API.validateId('patient HCP ID', patient_hcp_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_physicians/${patient_hcp_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, patientHcp, onSuccess, onFailure) {
  if (!API.validateId('patient HCP ID', patientHcp.id, onFailure)) {
    return
  }

  const method = 'PUT'
  const path = `/patient_physicians/${patientHcp.id}`
  API.perform(method, path, '', credentials, toJSON(patientHcp), onSuccess, onFailure)
}
