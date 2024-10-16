import { fieldHelper, idHelper, modelDatesHelper } from "../"

export const goldStandardGenericProductHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  genericProductId,
  goldStandardGenericProductClinical,
  goldStandardGenericProductClinicalId,
  name,
  synonym
}

function canDelete(_user, _goldStandardGenericProduct) {
  return false
}

function canEdit(_user, _goldStandardGenericProduct) {
  return false
}

function genericProductId(goldStandardGenericProduct) {
  return idHelper.id(goldStandardGenericProduct, "generic_product_id")
}

function goldStandardGenericProductClinical(goldStandardGenericProduct) {
  return fieldHelper.getField(goldStandardGenericProduct, "generic_product_clinical")
}

function goldStandardGenericProductClinicalId(goldStandardGenericProduct) {
  return idHelper.associatedId(
    goldStandardGenericProduct,
    'specific_product',
    goldStandardGenericProductHelper,
    "goldStandardGenericProductClinical",
    "generic_product_clinical_id"
  )
}

function name(goldStandardGenericProduct) {
  return fieldHelper.getField(goldStandardGenericProduct, 'name')
}

function synonym(goldStandardGenericProduct) {
  return fieldHelper.getField(goldStandardGenericProduct, 'synonym')
}
