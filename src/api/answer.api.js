import { API } from './api.js'
import { answerHelper } from '../helpers/answer.helper.js'

export const answerApi = {
  edit,
  indexForIntervention,
  listForIntervention,
  update
}

function toJSON(answer) {
  return {
    answer: answerHelper.toJSON(answer)
  }
}

function edit(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('answer ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/answers/${id}/edit`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function indexForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/answers`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/answers/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function update(credentials, answer, onSuccess, onFailure) {
  const method = 'PUT'
  const path = `/answers/${answer.id}`
  API.perform(method, path, '', credentials, toJSON(answer), onSuccess, onFailure)
}
