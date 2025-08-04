import { API } from './api.js'

export const pharmacyStoreProgramReportApi = {
  indexForPharmacyStore,
  indexForProgram,
  listForPharmacyStore,
  listForProgram,
  profile,
  show
}

function indexForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/pharmacy_store_program_reports`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForProgram(credentials, program_id, params, onSuccess, onFailure) {
  if (!API.validateId('program ID', program_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${program_id}/pharmacy_store_program_reports`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/pharmacy_store_program_reports/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForProgram(credentials, program_id, params, onSuccess, onFailure) {
  if (!API.validateId('program ID', program_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${program_id}/pharmacy_store_program_reports/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store program report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_store_program_reports/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}


function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store program report ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_store_program_reports/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
