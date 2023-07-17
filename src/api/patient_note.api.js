import { API } from './api'
import { patientNoteHelper } from '../helpers/patient_note.helper'

export const patientNoteApi = {
  buildNew,
  create,
  indexForPatient,
  listForPatient,
  show
}

function toJSON(patientNote) {
  return {
    patient_note: patientNoteHelper.toJSON(patientNote)
  }
}

function buildNew(credentials, patient_id, pharmacy_store_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_notes/new`
  API.perform(
    method,
    path,
    API.buildQueryString({ pharmacy_store_id }),
    credentials,
    undefined,
    onSuccess,
    onFailure
  )
}

function create(credentials, patientNote, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patientNote.pharmacy_store_patient.patient_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy store ID', patientNote.pharmacy_store_patient.pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${patientNote.pharmacy_store_patient.patient_id}/patient_notes`
  API.perform(method, path, '', credentials, toJSON(patientNote), onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_notes`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_notes/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('patient note ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_notes/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
