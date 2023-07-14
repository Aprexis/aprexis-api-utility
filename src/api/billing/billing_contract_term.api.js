import { API } from '../api'
import { billingContractTermHelper } from '../../helpers/billing/billing_contract_term.helper'

export const billingContractTermApi = {
  edit,
  indexForBillingContract,
  listForBillingContract,
  profile,
  show,
  update
}

function toJSON(billingContractTerm) {
  return {
    billing_contract_term: billingContractTermHelper.toJSON(billingContractTerm)
  }
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract term ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_terms/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForBillingContract(credentials, billing_contract_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_terms`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForBillingContract(credentials, billing_contract_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_terms/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}


function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract term ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_terms/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract term ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_terms/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, billingContractTerm, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/billing/contract_terms/${billingContractTermHelper.id(billingContractTerm)}`
  API.perform(method, path, '', credentials, toJSON(billingContractTerm), onSuccess, onFailure)
}
