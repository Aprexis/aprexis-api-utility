import { API } from './api.js'
import { dateHelper } from "../helpers/date.helper.js"

export const patientSearchAlgorithmBatchApi = {
  profile,
  show
}

function batchTime(batch) {
  const batchDate = dateHelper.makeDate(batch)

  // Batch times are stored in seconds, not milliseconds.
  return batchDate.getTime() / 1000
}

function profile(credentials, patient_search_algorithm_id, batch, onSuccess, onFailure) {
  if (!API.validateId('patient search algorithm ID', patient_search_algorithm_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_search_algorithms/${patient_search_algorithm_id}/batches/${batchTime(batch)}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, patient_search_algorithm_id, batch, onSuccess, onFailure) {
  if (!API.validateId('patient search algorithm ID', patient_search_algorithm_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_search_algorithms/${patient_search_algorithm_id}/batches/${batchTime(batch)}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
