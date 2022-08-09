import { billingContractHelper } from './billing_contract.helper'
import { apiHelper } from '../api.helper'
import { fieldHelper } from '../field.helper'
import { pharmacyStoreHelper } from '../pharmacy_store.helper'
import { userHelper } from '../user.helper'
import { valueHelper } from '../value.helper'
import { idHelper } from '../id.helper'

const billingContractPharmacyStoreEditableFields = [
  'claims_enabled',
  'clinical',
  'pulls_enabled',
  'transactional'
]

const billingContractPharmacyStoreKeys = [
  'id',
  'contract_id',
  'pharmacy_store_id',
  'clinical',
  'claims_enabled',
  'pulls_enabled',
  'transactional'
]

export const billingContractPharmacyStoreHelper = {
  ...idHelper,
  buildChanged,
  buildNewChanged,
  canBeCreated,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  changePharmacyStore,
  claimsEnabled,
  clinical,
  contract,
  contractId,
  healthPlanName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreName,
  pharmacyStoreNumber,
  pullsEnabled,
  toJSON,
  transactional
}

function buildChanged(billingContractPharmacyStore, changedBillingContractPharmacyStore) {
  if (valueHelper.isValue(changedBillingContractPharmacyStore)) {
    return changedBillingContractPharmacyStore
  }

  if (valueHelper.isValue(billingContractPharmacyStore.id)) {
    return copyIdentifiers(billingContractPharmacyStore)
  }

  return billingContractHelper.buildNewChanged(billingContractPharmacyStore)

  function copyIdentifiers(billingContractPharmacyStore) {
    return {
      id: billingContractPharmacyStoreHelper.id(billingContractPharmacyStore),
      contract_id: billingContractPharmacyStoreHelper.contractId(billingContractPharmacyStore),
      pharmacy_store_id: billingContractPharmacyStoreHelper.pharmacyStoreId(billingContractPharmacyStore)
    }
  }
}

function buildNewChanged(billingContractPharmacyStore) {
  return {
    ...billingContractPharmacyStore
  }
}

function canBeCreated(user, billingContract) {
  if (!billingContractHelper.allowPharmacyStores(billingContract)) {
    return false
  }

  return userHelper.canCreateBillingContractPharmacyStore(user)
}

function canDelete(_user, _billingContractPharmacyStore) {
  return false
}

function canEdit(user, _billingContractPharmacyStore) {
  return userHelper.hasRole(user, 'aprexis_admin')
}

function canModifyField(billingContractPharmacyStore, fieldName) {
  if (!valueHelper.isValue(billingContractPharmacyStoreHelper.id(billingContractPharmacyStore))) {
    return true
  }

  return billingContractPharmacyStoreEditableFields.includes(fieldName)
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('billingContractPharmacyStore', model, changedModel, fieldName, newValue)
}

function changePharmacyStore(billingContractPharmacyStore, changedBillingContractPharmacyStore, pharmacyStore) {
  const myChangedPharmacyStore = this.buildChanged(
    billingContractPharmacyStore,
    changedBillingContractPharmacyStore
  )

  return {
    billingContractPharmacyStore: {
      ...billingContractPharmacyStore,
      pharmacy_store_id: pharmacyStoreHelper.id(pharmacyStore),
      pharmacyStore
    },
    changedBillingContractPharmacyStore: {
      ...myChangedPharmacyStore,
      pharmacy_store_id: pharmacyStoreHelper.id(pharmacyStore),
      pharmacyStore
    }
  }
}

function claimsEnabled(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'claims_enabled')
}

function clinical(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'clinical')
}

function contract(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'contract')
}

function contractId(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'contract_id')
}

function healthPlanName(billingContractPharmacyStore) {
  return billingContractHelper.healthPlanName(
    billingContractPharmacyStoreHelper.contract(billingContractPharmacyStore)
  )
}

function pharmacyStore(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'pharmacy_store')
}

function pharmacyStoreId(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'pharmacy_store_id')
}

function pharmacyStoreName(billingContractPharmacyStore) {
  return pharmacyStoreHelper.name(billingContractPharmacyStoreHelper.pharmacyStore(billingContractPharmacyStore))
}

function pharmacyStoreNumber(billingContractPharmacyStore) {
  return pharmacyStoreHelper.storeNumber(billingContractPharmacyStoreHelper.pharmacyStore(billingContractPharmacyStore))
}

function pullsEnabled(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'pulls_enabled')
}

function toJSON(billingContractPharmacyStore) {
  return apiHelper.toJSON(billingContractPharmacyStore, billingContractPharmacyStoreKeys)
}

function transactional(billingContractPharmacyStore) {
  return fieldHelper.getField(billingContractPharmacyStore, 'transactional')
}
