import { API } from './api'

export const faxApi = {
  indexForIntervention,
  listForIntervention
}

function indexForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/faxes`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/faxes/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}
