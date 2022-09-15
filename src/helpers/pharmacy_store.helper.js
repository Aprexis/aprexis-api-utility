import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { addressHelper } from './address.helper'
import { contactHelper } from './contact.helper'
import { idHelper } from './id.helper'
import { pharmacyChainHelper } from './pharmacy_chain.helper'
import { userHelper } from './user.helper'

export const pharmacyStoreHelper = {
  ...idHelper,
  ...valueHelper.filterHash(addressHelper, { excludeKeys: ['keys'] }),
  ...valueHelper.filterHash(contactHelper, { excludeKeys: ['keys'] }),
  canDelete,
  canEdit,
  canIndex,
  ccdCode,
  display,
  einNumber,
  identification,
  latitude,
  longitude,
  nabp,
  name,
  npi,
  npiDeactivationDate,
  npiDeactivationReasonCode,
  npiReactivationDate,
  notes,
  overridePharmacyOrganizationBillingInfo,
  storeNumber,
  stripeCustomer,
  stripePharmacistLicensePrice,
  stripePharmacyTechnicianLicensePrice,
  stripeSubscription
}

function canDelete(_user, _pharmacyStore) {
  return false
}

function canEdit(_user, _pharmacyStore) {
  return false
}

function canIndex(user) {
  return userHelper.hasRole(
    user,
    [
      'aprexis_admin',
      'aprexis_observer',
      'aprexis_user_admin',
      'pharmacy_chain_admin',
      'pharmacy_store_admin',
      'pharmacy_store_tech',
      'pharmacy_store_user'
    ]
  )
}

function ccdCode(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'ccd_code')
}

function display(pharmacyStore) {
  if (!valueHelper.isValue(pharmacyStore)) {
    return '(no pharmacy store)'
  }

  const pharmacyChainName = pharmacyChainHelper.name(fieldHelper.getField(pharmacyStore, 'pharmacy'))
  return `${pharmacyChainName} - ${pharmacyStoreHelper.identification(pharmacyStore)}`
}

function einNumber(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'ein_number')
}

function identification(pharmacyStore) {
  const id = pharmacyStoreHelper.id(pharmacyStore)
  const name = pharmacyStoreHelper.name(pharmacyStore)
  const number = pharmacyStoreHelper.storeNumber(pharmacyStore)

  if (valueHelper.isStringValue(number)) {
    return `${name} ${number}`
  }

  return `${name} (#${id})`
}

function latitude(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'latitude')
}

function longitude(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'longitude')
}

function nabp(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'nabp')
}

function name(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'name')
}

function notes(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'notes')
}

function npi(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'npi')
}

function npiDeactivationDate(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'npi_deactivation_date')
}

function npiDeactivationReasonCode(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'npi_deactivation_reason_code')
}

function npiReactivationDate(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'npi_reactivation_date')
}

function overridePharmacyOrganizationBillingInfo(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'override_pharmacy_organization_billing_info')
}

function storeNumber(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'store_number')
}

function stripeCustomer(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'stripe_customer')
}

function stripePharmacistLicensePrice(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'stripe_pharmacist_license_price')
}

function stripePharmacyTechnicianLicensePrice(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'stripe_pharmacy_technician_license_price')
}

function stripeSubscription(pharmacyStore) {
  return fieldHelper.getField(pharmacyStore, 'stripe_subscription')
}
