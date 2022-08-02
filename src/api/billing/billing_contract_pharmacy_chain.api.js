import { API } from '../api'
import { billingContractPharmacyChainHelper } from '../../helpers/billing/billing_contract_pharmacy_chain.helper'

function toJSON(billingContractPharmacyChain) {
  return {
    billing_contract_pharmacy: billingContractPharmacyChainHelper.toJSON(billingContractPharmacyChain)
  }
}

export const billingContractPharmacyChainApi = {
  buildNewForBillingContract,
  create,
  edit,
  indexForBillingContract,
  listForBillingContract,
  profile,
  show,
  update
}

function buildNewForBillingContract(credentials, billing_contract_id, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_pharmacies/new`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function create(credentials, billingContractPharmacyChain, onSuccess, onFailure) {
  if (!API.validateId('contract ID', billingContractPharmacyChain.contract_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy ID', billingContractPharmacyChain.pharmacy_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/billing/contracts/${billingContractPharmacyChain.contract_id}/contract_pharmacies`
  API.perform(method, path, '', credentials, toJSON(billingContractPharmacyChain), onSuccess, onFailure)
}

function edit(credentials, contract_pharmacy_id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy ID', contract_pharmacy_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacies/${contract_pharmacy_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForBillingContract(credentials, billing_contract_id, params, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_pharmacies`
  API.perform(method, path, API.buildQueryString(params), userCredentials, undefined, onSuccess, onFailure)
}

function listForBillingContract(credentials, billing_contract_id, params, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_pharmacies/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacies/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacies/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, billingContractPharmacyChain, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/billing/contract_pharmacies/${billingContractPharmacyChain.id}`
  API.perform(method, path, '', credentials, toJSON(billingContractPharmacyChain), onSuccess, onFailure)
}
