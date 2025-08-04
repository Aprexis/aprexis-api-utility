import { API } from './api.js'

export const mapTalkingPointApi = {
  indexForIntervention,
  listForIntervention,
  profile,
  show
}

function indexForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/map_talking_points`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/map_talking_points/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('map talking point ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/map_talking_points/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('map talking point ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/map_talking_points/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
