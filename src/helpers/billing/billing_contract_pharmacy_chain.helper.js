import { billingContractHelper } from './billing_contract.helper.js'
import { apiHelper } from '../api.helper.js'
import { fieldHelper } from '../field.helper.js'
import { pharmacyChainHelper } from '../pharmacy_chain.helper.js'
import { userHelper } from '../user.helper.js'
import { valueHelper } from '../value.helper.js'
import { idHelper } from '../id.helper.js'
import { modelDatesHelper } from '../model_dates.helper.js'

const billingContractPharmacyChainEditableFields = [
  'claims_enabled',
  'clinical',
  'pulls_enabled',
  'transactional'
]

const billingContractPharmacyChainKeys = [
  'id',
  'contract_id',
  'pharmacy_id',
  'clinical',
  'claims_enabled',
  'pulls_enabled',
  'transactional'
]

export const billingContractPharmacyChainHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
  canBeCreated,
  canModifyField,
  canDelete,
  canEdit,
  changeField,
  changePharmacyChain,
  claimsEnabled,
  clinical,
  contract,
  contractId,
  healthPlanName,
  pharmacyChain,
  pharmacyChainId,
  pharmacyChainName,
  pullsEnabled,
  toJSON,
  transactional
}

function buildChanged(billingContractPharmacyChain, changedBillingContractPharmacyChain) {
  if (valueHelper.isValue(changedBillingContractPharmacyChain)) {
    return changedBillingContractPharmacyChain
  }

  if (valueHelper.isValue(billingContractPharmacyChain.id)) {
    return copyIdentifiers(billingContractPharmacyChain)
  }

  return billingContractHelper.buildNewChanged(billingContractPharmacyChain)

  function copyIdentifiers(billingContractPharmacyChain) {
    return {
      id: billingContractPharmacyChainHelper.id(billingContractPharmacyChain),
      contract_id: billingContractPharmacyChainHelper.contractId(billingContractPharmacyChain),
      pharmacy_id: billingContractPharmacyChainHelper.pharmacyChainId(billingContractPharmacyChain)
    }
  }
}

function buildNewChanged(billingContractPharmacyChain) {
  return {
    ...billingContractPharmacyChain
  }
}

function canBeCreated(user, billingContract) {
  if (!billingContractHelper.allowPharmacyChains(billingContract)) {
    return false
  }

  return userHelper.canCreateBillingContractPharmacyChain(user)
}

function canDelete(_user, _billingContractPharmacyChain) {
  return false
}

function canEdit(user, _billingContractPharmacyChain) {
  return userHelper.hasRole(user, 'aprexis_admin')
}

function canModifyField(billingContractPharmacyChain, fieldName) {
  if (!valueHelper.isValue(billingContractPharmacyChainHelper.id(billingContractPharmacyChain))) {
    return true
  }

  return billingContractPharmacyChainEditableFields.includes(fieldName)
}

function changePharmacyChain(billingContractPharmacyChain, changedBillingContractPharmacyChain, pharmacyChain) {
  const myChangedPharmacyChain = this.buildChanged(billingContractPharmacyChain, changedBillingContractPharmacyChain)

  return {
    billingContractPharmacyChain: {
      ...billingContractPharmacyChain,
      pharmacy_id: pharmacyChainHelper.id(pharmacyChain),
      pharmacyChain
    },
    changedBillingContractPharmacyChain: {
      ...myChangedPharmacyChain,
      pharmacy_id: pharmacyChainHelper.id(pharmacyChain),
      pharmacyChain
    }
  }
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('billingContractPharmacyChain', model, changedModel, fieldName, newValue)
}

function claimsEnabled(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'claims_enabled')
}

function clinical(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'clinical')
}

function contract(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'contract')
}

function contractId(billingContractPharmacyChain) {
  return idHelper.associatedId(billingContractPharmacyChain, 'contract', billingContractPharmacyChainHelper)
}

function healthPlanName(billingContractPharmacyChain) {
  return billingContractHelper.healthPlanName(
    billingContractPharmacyChainHelper.contract(billingContractPharmacyChain)
  )
}

function pharmacyChain(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'pharmacy')
}

function pharmacyChainId(billingContractPharmacyChain) {
  return idHelper.associatedId(billingContractPharmacyChain, 'pharmacy', billingContractPharmacyChainHelper)
}

function pharmacyChainName(billingContractPharmacyChain) {
  return pharmacyChainHelper.name(billingContractPharmacyChainHelper.pharmacyChain(billingContractPharmacyChain))
}

function pullsEnabled(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'pulls_enabled')
}

function toJSON(billingContractPharmacyChain) {
  return apiHelper.toJSON(billingContractPharmacyChain, billingContractPharmacyChainKeys)
}

function transactional(billingContractPharmacyChain) {
  return fieldHelper.getField(billingContractPharmacyChain, 'transactional')
}
