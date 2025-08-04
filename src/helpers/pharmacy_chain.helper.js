import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { addressHelper } from './address.helper.js'
import { contactHelper } from './contact.helper.js'
import { userHelper } from './user.helper.js'
import { idHelper } from './id.helper.js'
import { modelConfigsHelper } from './model_configs.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const pharmacyChainHelper = {
  ...idHelper,
  ...valueHelper.filterHash(addressHelper, { excludeKeys: ['keys'] }),
  ...valueHelper.filterHash(contactHelper, { excludeKeys: ['keys'] }),
  ...modelConfigsHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  canIndex,
  ccdCode,
  chain,
  einNumber,
  logo,
  name,
  notes,
  npi,
  parentOrganizationLbn,
  pharmacyStoreCount
}

function canDelete(_user, _pharmacyChain) {
  return false
}

function canEdit(_user, _pharmacyChain) {
  return false
}

function canIndex(user) {
  return userHelper.hasRole(
    user,
    [
      'aprexis_admin',
      'aprexis_observer',
      'aprexis_user_admin',
      'pharmacy_chain_admin'
    ]
  )
}

function ccdCode(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'ccd_code')
}

function chain(pharmacyChain) {
  const name = pharmacyChainHelper.name(pharmacyChain)
  const state = pharmacyChainHelper.state(pharmacyChain)
  const city = pharmacyChainHelper.city(pharmacyChain)
  let chain = ''

  if (valueHelper.isStringValue(name)) {
    chain = name
  }

  if (valueHelper.isStringValue(state)) {
    chain = `${chain}, ${state}`
  }

  if (valueHelper.isStringValue(city)) {
    chain = `${chain}, ${city}`
  }

  return chain
}

function einNumber(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'ein_number')
}

function logo(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'logo')
}

function name(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'name')
}

function notes(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'notes')
}

function npi(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'npi')
}

function parentOrganizationLbn(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'parent_organization_lbn')
}

function pharmacyStoreCount(pharmacyChain) {
  return fieldHelper.getField(pharmacyChain, 'pharmacy_store_count')
}
