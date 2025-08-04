import { API } from '../api.js'

export const billingClaimApi = {
  createForIntervention,
  indexForHealthPlan,
  indexForPharmacyStore,
  listForHealthPlan,
  listForPharmacyStore,
  profile,
  show
}

function createForIntervention(credentials, intervention_id, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/interventions/${intervention_id}/billing/claims`
  API.perform(method, path, '', credentials, { intervention: { id: intervention_id } }, onSuccess, onFailure)
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/claims`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/billing/claims`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/claims/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPharmacyStore(credentials, pharmacy_store_id, params, onSuccess, onFailure) {
  if (!API.validateId('pharmacy store ID', pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/pharmacy_stores/${pharmacy_store_id}/billing/claims/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/claims/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('claim ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/claims/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
