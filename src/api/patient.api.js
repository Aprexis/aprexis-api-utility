import { API } from './api'
import { patientHelper } from '../helpers/patient.helper'

export const patientApi = {
  buildNew,
  create,
  edit,
  index,
  list,
  listForHealthPlan,
  listForPharmacyStore,
  search,
  show,
  showForUser,
  update
}

function toJSON(patient) {
  return {
    patient: patientHelper.toJSON(patient)
  }
}

function buildNew(credentials, health_plan_id, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/patients/new`
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

function create(credentials, patient, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', patient.health_plan_id, onFailure)) {
    return
  }


  const method = 'POST'
  const path = `/health_plans/${patient.health_plan_id}/patients`
  API.perform(method, path, '', credentials, toJSON(patient), onSuccess, onFailure)
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
v
function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/patients/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/patients/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function search(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/search`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function showForUser(credentials, user_id, onSuccess, onFailure) {
  if (!API.validateId('user ID', user_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/admin/users/${user_id}/patient`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, patient, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/patients/${patient.id}`
  API.perform(method, path, '', credentials, toJSON(patient), onSuccess, onFailure)
}
