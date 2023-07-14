import { API } from './api'
import { labTestValueHelper, valueHelper } from '../helpers'

export const labTestValueApi = {
  buildNewForPatient,
  create,
  edit,
  indexForIntervention,
  indexForPatient,
  listForIntervention,
  listForPatient,
  profile,
  show,
  update
}

function toJSON(labTestValue) {
  return {
    lab_test_value: labTestValueHelper.toJSON(labTestValue)
  }
}

function buildNewForPatient(credentials, patient_id, pharmacy_store_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  let queryString = ''
  if (valueHelper.isNumberValue(pharmacy_store_id)) {
    if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
      return
    }

    queryString = `?pharmacy_store_id=${pharmacy_store_id}`
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/lab_test_values/new`

  API.perform(method, path, queryString, credentials, undefined, onSuccess, onFailure)
}

function create(credentials, labTestValue, onSuccess, onFailure) {
  if (!API.validateId('lab test ID', labTestValue.lab_test_id, onFailure)) {
    return
  }
  if (!API.validateId('patient ID', labTestValue.patient_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy store ID', labTestValue.pharmacy_store_id, onFailure, true)) {
    return
  }
  if (!API.validateId('user ID', labTestValue.user_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/patients//${labTestValue.patient_id}/lab_test_values`
  API.perform(method, path, '', credentials, toJSON(labTestValue), onSuccess, onFailure)
}

function edit(credentials, lab_test_value_id, onSuccess, onFailure) {
  if (!API.validateId('lab test value ID', lab_test_value_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/lab_test_values/${lab_test_value_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/lab_test_values`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/lab_test_values`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}


function listForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/lab_test_values/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPatient(credentials, patient_id, params, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/lab_test_values/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, lab_test_value_id, onSuccess, onFailure) {
  if (!API.validateId('lab test value ID', lab_test_value_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/lab_test_values/${lab_test_value_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, lab_test_value_id, onSuccess, onFailure) {
  if (!API.validateId('lab test value ID', lab_test_value_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/lab_test_values/${lab_test_value_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, lab_test_value, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/lab_test_values/${lab_test_value.id}`
  API.perform(method, path, '', credentials, toJSON(lab_test_value), onSuccess, onFailure)
}
