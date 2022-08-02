import { API } from './api'

export const patientSearchAlgorithmApi = {
  forHealthPlan,
  legitimate
}

function forHealthPlan(credentials, healthPlanId, params, onSuccess, onFailure) {
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
