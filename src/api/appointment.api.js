import { API } from './api.js'
import { appointmentHelper } from '../helpers/appointment.helper.js'

export const appointmentApi = {
  buildNew,
  create,
  destroy,
  edit,
  indexForUser,
  listForUser,
  update
}

function toJSON(appointment) {
  return {
    appointment: appointmentHelper.toJSON(appointment)
  }
}

function buildNew(credentials, user_id, params, onSuccess, onFailure) {
  if (!API.validateId('user ID', user_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${user_id}/appointments/new`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function create(credentials, appointment, onSuccess, onFailure) {
  if (!API.validateId('user ID', appointment.user_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy store ID', appointment.pharmacy_store_id, onFailure, true)) {
    return
  }

  const method = 'POST'
  const path = `/admin/users/${appointment.user_id}/appointments`
  API.perform(method, path, '', credentials, toJSON(appointment), onSuccess, onFailure)
}

function destroy(credentials, appointment_id, onSuccess, onFailure) {
  if (!API.validateId('appointment ID', appointment_id, onFailure)) {
    return
  }

  const method = 'DELETE'
  const path = `/appointments/${appointment_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('appointment ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/appointments/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForUser(credentials, user_id, params, onSuccess, onFailure) {
  if (!API.validateId('user ID', user_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${user_id}/appointments`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForUser(credentials, user_id, params, onSuccess, onFailure) {
  if (!API.validateId('user ID', user_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${user_id}/appointments/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}


function update(credentials, appointment, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/appointments/${appointment.id}`
  API.perform(method, path, '', credentials, toJSON(appointment), onSuccess, onFailure)
}
