import { API } from '../'

export const goldStandardPackage_versionVersionApi = {
  index,
  list,
  listForPackage,
  profile,
  show
}

function index(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/package_versions'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function list(credentials, params, onSuccess, onFailure) {
  const method = 'GET'
  const path = '/gold_standard/package_versions/list'
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function listForPackage(credentials, package_id, params, onSuccess, onFailure) {
  if (!API.validateId('package ID', package_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/packages/${package_id}/package_versions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profile(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('package version ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/package_versions/${id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function show(credentials, id, onSuccess, onFailure) {
  if (!API.validateId('package version ID', id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/package_versions/${id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
