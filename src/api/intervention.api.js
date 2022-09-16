import { valueHelper } from '../helpers/value.helper'
import { interventionHelper } from '../helpers/intervention.helper'
import { API } from './api'

export const interventionApi = {
  buildNewExternal,
  createExternal,
  edit,
  index,
  indexForPatient,
  indexForPharmacyStore,
  list,
  listForPatient,
  listForPharmacyStore,
  profile,
  queueForPatient,
  show,
  update,
  verify
}

function toJSON(intervention) {
  return {
    intervention: interventionHelper.toJSON(intervention)
  }
}

function buildNewExternal(credentials, patient_id, pharmacy_store_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const params = {}
  if (valueHelper.isValue(pharmacy_store_id)) {
    if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
      return
    }

    params.pharmacy_store_id = pharmacy_store_id
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/interventions/external/new`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function createExternal(credentials, externalIntervention, onSuccess, onFailure) {
  if (!API.validateId('patient ID', externalIntervention.patient_id, onFailure)) {
    return
  }

  if (!API.validateId('pharmacy store ID', externalIntervention.pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients/${externalIntervention.patient_id}/interventions/external`
  API.perform(method, path, '', credentials, toJSON(externalIntervention), onSuccess, onFailure)
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/interventions`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/${patient_id}/interventions`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/interventions`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/${patient_id}/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/interventions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function queueForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = `/patients/${patient_id}/interventions/queue`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}


function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, intervention, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/interventions/${intervention.id}`
  API.perform(method, path, '', credentials, toJSON(intervention), onSuccess, onFailure)
}

function verify(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${id}/verify`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
