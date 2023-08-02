import { fieldHelper } from '../field.helper'
import { valueHelper } from '../value.helper'

export const loadProviderHelper = {
  canDelete,
  canEdit,
  entityTypeCode,
  npi,
  providerFirstName,
  providerLastNameLegalName,
  providerMiddleName,
  providerName
}

function canDelete(_user, _loadProvider) {
  return false
}

function canEdit(_user, _loadProvider) {
  return false
}

function entityTypeCode(loadProvider) {
  return fieldHelper.getField(loadProvider, 'entity-type-code')
}

function npi(loadProvider) {
  return fieldHelper.getField(loadProvider, 'npi')
}

function providerFirstName(loadProvider) {
  return fieldHelper.getField(loadProvider, 'provider_first_name')
}

function providerLastNameLegalName(loadProvider) {
  return fieldHelper.getField(loadProvider, 'provider_last_name_legal_name')
}

function providerMiddleName(loadProvider) {
  return fieldHelper.getField(loadProvider, 'provider_middle-name')
}

function providerName(loadProvider) {
  const firstName = loadProviderHelper.providerFirstName(loadProvider)
  const middleName = loadProviderHelper.providerMiddleName(loadProvider)
  const lastName = loadProviderHelper.providerLastNameLegalName(loadProvider)
  const lastFirst = `${lastName}, ${firstName}`

  if (!valueHelper.isStringValue(middleName)) {
    return lastFirst
  }

  return `${lastFirst} ${middleName}`
}
