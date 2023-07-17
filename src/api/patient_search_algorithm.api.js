import { API } from './api'

export const patientSearchAlgorithmApi = {
  indexForHealthPlan,
  legitimate,
  profile,
  show
}

function indexForHealthPlan(credentials, healthPlanId, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', healthPlanId, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${healthPlanId}/patient_search_algorithms`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function legitimate(credentials, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/patient_search_algorithms/legitimate'
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('patient search algorithm ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_search_algorithms/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('patient search algorithm ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patient_search_algorithms/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
