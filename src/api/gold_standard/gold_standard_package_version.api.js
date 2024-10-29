import { API } from '../'

export const goldStandardPackageVersionApi = {
  listForPackage,
  profileForPackage,
  showForPackage
}

function listForPackage(credentials, package_id, params, onSuccess, onFailure) {
  if (!API.validateId('package ID', package_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/packages/${package_id}/package_versions/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profileForPackage(credentials, package_id, version, onSuccess, onFailure) {
  if (!API.validateId('package ID', package_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/packages/${package_id}/package_versions/${version}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function showForPackage(credentials, package_id, version, onSuccess, onFailure) {
  if (!API.validateId('package ID', package_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/packages/${package_id}/package_versions/${version}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
