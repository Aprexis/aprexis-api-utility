import { API } from './api'

export const interventionDocumentApi = {
  download,
  indexForIntervention,
  listForIntervention,
  profile,
  show
}

function download(credentials, intervention_document_id, onSuccess, onFailure, onDownload) {
  if (!API.validateId('intervention document ID', intervention_document_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/intervention_documents/${intervention_document_id}/download`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure, { isDownload: true, onDownload })
}

function indexForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/intervention_documents`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForIntervention(credentials, intervention_id, params, onSuccess, onFailure) {
  if (!API.validateId('intervention ID', intervention_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/interventions/${intervention_id}/intervention_documents/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention document ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/intervention_documents/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('intervention document ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/intervention_documents/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
