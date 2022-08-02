import { API } from '../api'

export const billingClaimHistoryCollectionApi = {
  index
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/billing/claim_history_collections'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
