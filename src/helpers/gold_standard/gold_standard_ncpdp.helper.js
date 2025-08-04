import { fieldHelper, idHelper } from '../index.js'

export const goldStandardNcpdpHelper = {
  goldStandardNcpdpBillingUnit,
  goldStandardNcpdpBillingUnitId,
  ncpdpExceptionalCount,
  ncpdpScriptFormCode
}

function goldStandardNcpdpBillingUnit(goldStandardNcpdp) {
  return fieldHelper.getField(goldStandardNcpdp, 'ndpdp_billing_unit')
}

function goldStandardNcpdpBillingUnitId(goldStandardNcpdp) {
  return idHelper.associatedId(
    goldStandardNcpdp,
    'ndpdp_billing_unit',
    goldStandardNcpdpHelper,
    "goldStandardNcpdpBillingUnit",
    "ndpdp_billing_unit_id"
  )
}

function ncpdpExceptionalCount(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ncpdp_exceptional_count')
}

function ncpdpScriptFormCode(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ncpdp_script_form_code')
}
