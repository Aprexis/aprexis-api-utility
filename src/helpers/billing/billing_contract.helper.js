import { valueHelper } from '../value.helper'
import { fieldHelper } from '../field.helper'
import { pathHelper } from '../path.helper'
import { dateHelper } from '../date.helper'
import { apiHelper } from '../api.helper'
import { healthPlanHelper } from '../health_plan.helper'
import { userHelper } from '../user.helper'
import { idHelper } from '../id.helper'

export const billingContractHelper = {
  ...idHelper,
  active,
  allowPharmacyChains,
  allowPharmacyStores,
  buildChanged,
  buildNewChanged,
  canBeCreated,
  canDelete,
  canEdit,
  canModifyField,
  contractWith,
  displayStartDate,
  displayStopDate,
  healthPlan,
  healthPlanId,
  healthPlanName,
  label,
  name,
  startDate,
  stopDate,
  toJSON
}

const billingContractEditableFields = [
  'name',
  'start_date',
  'stop_date'
]

const billingContractKeys = [
  'id',
  'health_plan_id',
  'name',
  'start_date',
  'stop_date'
]

function active(billingContract) {
  const active = fieldHelper.getField(billingContract, 'active')

  /* TODO:
     the active field does not seem to be in use at this time and is always empty, so we'll assume that it
     means that the contract stop date should be used to determine whether it is active.
  */
  if (!valueHelper.isValue(active) || active == '') {
    const stopDateValue = billingContractHelper.stopDate(billingContract)
    if (!dateHelper.isValidDate(stopDateValue)) {
      // Assume that no stop date is the same as being active.
      return true
    }

    const stopDate = dateHelper.makeDate(stopDateValue)
    const now = new Date()
    return +now <= +stopDate
  }

  return active
}

function allowPharmacyChains(billingContract) {
  const contractWith = billingContractHelper.contractWith(billingContract)
  if (!valueHelper.isStringValue(contractWith)) {
    return false
  }

  return contractWith != 'Pharmacy Stores'
}

function allowPharmacyStores(billingContract) {
  const contractWith = billingContractHelper.contractWith(billingContract)
  if (!valueHelper.isStringValue(contractWith)) {
    return false
  }

  return contractWith != 'Pharmacy Chains'
}

function buildChanged(billingContract, changedBillingContract) {
  if (valueHelper.isValue(changedBillingContract)) {
    return changedBillingContract
  }

  if (valueHelper.isValue(billingContract.id)) {
    return copyIdentifiers(billingContract)
  }

  return billingContractHelper.buildNewChanged(billingContract)

  function copyIdentifiers(billingContract) {
    return {
      id: billingContractHelper.id(billingContract),
      health_plan_id: billingContractHelper.healthPlanId(billingContract)
    }
  }
}

function buildNewChanged(billingContract) {
  return {
    ...billingContract
  }
}

function canBeCreated(user, pathEntries) {
  if (!userHelper.canCreateBillingContract(user)) {
    return false
  }

  return pathHelper.isSingular(pathEntries, 'health-plans')
}

function canDelete(_user, _billingContract) {
  return false
}

function canEdit(user, billingContract) {
  return healthPlanHelper.canConfigure(user, billingContractHelper.healthPlan(billingContract))
}

function canModifyField(billingContract, fieldName) {
  if (!valueHelper.isValue(billingContractHelper.id(billingContract))) {
    return true
  }

  return (billingContractEditableFields.includes(fieldName))
}

function contractWith(billingContract) {
  return fieldHelper.getField(billingContract, 'contract_with')
}

function displayStartDate(billingContract) {
  const startDate = billingContractHelper.startDate(billingContract)

  return dateHelper.displayDate(startDate)
}

function displayStopDate(billingContract) {
  const stopDate = billingContractHelper.stopDate(billingContract)

  return dateHelper.displayDate(stopDate)
}

function healthPlan(billingContract) {
  return fieldHelper.getField(billingContract, 'health_plan')
}

function healthPlanId(billingContract) {
  return fieldHelper.getField(billingContract, 'id')
}

function healthPlanName(billingContract) {
  return healthPlanHelper.name(billingContractHelper.healthPlan(billingContract))
}

function label(billingContract) {
  return `${billingContractHelper.healthPlanName(billingContract)} Contract: ${billingContractHelper.name(billingContract)}`
}

function name(billingContract) {
  return fieldHelper.getField(billingContract, 'name')
}

function startDate(billingContract) {
  return fieldHelper.getField(billingContract, 'start_date')
}

function stopDate(billingContract) {
  return fieldHelper.getField(billingContract, 'stop_date')
}

function toJSON(billingContract) {
  return apiHelper.toJSON(billingContract, billingContractKeys)
}
