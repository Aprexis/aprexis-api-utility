import { API } from './api.js'
import { reminderHelper } from '../helpers/reminder.helper.js'

export const reminderApi = {
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

function toJSON(reminder) {
  return {
    reminder: reminderHelper.toJSON(reminder)
  }
}

function buildNew(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/reminders/new`
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

function create(credentials, reminder, onSuccess, onFailure) {
  if (!API.validateId('patient ID', reminder.patient_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${reminder.patient_id}/reminders`
  API.perform(method, path, '', credentials, toJSON(reminder), onSuccess, onFailure)
}

function destroy(credentials, reminder_id, onSuccess, onFailure) {
  if (!API.validateId('reminder ID', reminder_id, onFailure)) {
    return
  }

  const method = 'DELETE'
  const path = `/reminders/${reminder_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function edit(credentials, reminder_id, onSuccess, onFailure) {
  if (!API.validateId('reminder ID', reminder_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/reminders/${reminder_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/reminders`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/reminders/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, reminder_id, onSuccess, onFailure) {
  if (!API.validateId('reminder ID', reminder_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/reminders/${reminder_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, reminder_id, onSuccess, onFailure) {
  if (!API.validateId('reminder ID', reminder_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/reminders/${reminder_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, reminder, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/reminders/${reminder.id}`
  API.perform(method, path, '', credentials, toJSON(reminder), onSuccess, onFailure)
}
