import { API } from './'

export const documentApi = {
  download,
  listForHealthPlan,
  profile
}

function download(credentials, document_id, onSuccess, onFailure, onDownload) {
  if (!API.validateId('document ID', document_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/documents/${document_id}/download`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure, { isDownload: true, onDownload })
}

function listForHealthPlan(credentials, health_plan_id, params, onSuccess, onFailure) {
  if (!API.validateId('health plan ID', health_plan_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/health_plans/${health_plan_id}/documents/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, document_id, onSuccess, onFailure) {
  if (!API.validateId('document ID', document_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/documents/${document_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
