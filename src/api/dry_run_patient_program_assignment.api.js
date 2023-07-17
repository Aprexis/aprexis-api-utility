import { API } from './api'

export const dryRunProgramPatientAssignmentApi = {
  indexForPharmacyStore,
  indexForProgram,
  listForPharmacyStore,
  listForProgram
}

function indexForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/dry_run_program_patient_assignments`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForProgram(credentials, program_id, params, onSuccess, onFailure) {
  if (!API.validateId('program ID', program_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${program_id}/dry_run_program_patient_assignments`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/dry_run_program_patient_assignments/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForProgram(credentials, program_id, params, onSuccess, onFailure) {
  if (!API.validateId('program ID', program_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${program_id}/dry_run_program_patient_assignments/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
