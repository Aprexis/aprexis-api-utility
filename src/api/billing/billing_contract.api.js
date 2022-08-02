import { API } from '../api'
import { billingContractHelper } from '../../helpers/billing/billing_contract.helper'

export const billingContractApi = {
  buildNew,
  create,
  edit,
  indexForHealthPlan,
  listForHealthPlan,
  profile,
  show,
  update
}

function toJSON(billingContract) {
  return {
    billing_contract: billingContractHelper.toJSON(billingContract)
  }
}

function buildNew(credentials, health_plan_id, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/contracts/new`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function create(credentials, billingContract, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', billingContract.health_plan_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/health_plans/${billingContract.health_plan_id}/billing/contracts`
  API.perform(method, path, '', credentials, toJSON(billingContract), onSuccess, onFailure)
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/contracts`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/billing/contracts/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, billingContract, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/billing/contracts/${billingContractHelper.id(billingContract)}`
  API.perform(method, path, '', credentials, toJSON(billingContract), onSuccess, onFailure)
}
