import { API } from '../api'
import { billingContractPharmacyStoreHelper } from '../../helpers/billing/billing_contract_pharmacy_store.helper'

function toJSON(billingContractPharmacyStore) {
  return {
    billing_contract_pharmacy_store: billingContractPharmacyStoreHelper.toJSON(billingContractPharmacyStore)
  }
}

export const billingContractPharmacyStoreApi = {
  buildNewForBillingContract,
  create,
  edit,
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
  const path = `/billing/contracts/${billing_contract_id}/contract_pharmacy_stores/new`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function create(credentials, billingContractPharmacyStore, onSuccess, onFailure) {
  if (!API.validateId('contract ID', billingContractPharmacyStore.contract_id, onFailure)) {
    return
  }
  if (!API.validateId('pharmacy store ID', billingContractPharmacyStore.pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'POST'
  const path = `/billing/contracts/${billingContractPharmacyStore.contract_id}/contract_pharmacy_stores`
  API.perform(method, path, '', credentials, toJSON(billingContractPharmacyStore), onSuccess, onFailure)
}

function edit(credentials, contract_pharmacy_store_id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy ID', contract_pharmacy_store_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacy_stores/${contract_pharmacy_store_id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}


function listForBillingContract(credentials, billing_contract_id, params, onSuccess, onFailure) {
  if (!API.validateId('billing contract ID', billing_contract_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contracts/${billing_contract_id}/contract_pharmacy_stores/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy store ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacy_stores/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('contract pharmacy store ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/billing/contract_pharmacy_stores/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function update(credentials, billingContractPharmacyStore, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/billing/contract_pharmacy_stores/${billingContractPharmacyStore.id}`
  API.perform(method, path, '', credentials, toJSON(billingContractPharmacyStore), onSuccess, onFailure)
}
