import { API } from '../api.js'

export const billingInvoiceApi = {
  index,
  indexForHealthPlan,
  list,
  listForHealthPlan,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/billing/invoices'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/invoices`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/billing/invoices/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/invoices/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('invoice ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/invoices/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('invoice ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/invoices/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
