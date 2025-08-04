import { fieldHelper, idHelper, modelDatesHelper } from '../index.js'
import { goldStandardGenericProductHelper } from './gold_standard_generic_product.helper.js'

export const goldStandardSpecificDrugProductHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  goldStandardGenericProduct,
  goldStandardGenericProductId,
  goldStandardGenericProductName,
  name,
  specificDrugProductId,
  synonym
}

function canDelete(_user, _goldStandardSpecificDrugProduct) {
  return false
}

function canEdit(_user, _goldStandardSpecificDrugProduct) {
  return false
}

function goldStandardGenericProduct(goldStandardSpecificDrugProduct) {
  return fieldHelper.getField(goldStandardSpecificDrugProduct, 'generic_product')
}

function goldStandardGenericProductId(goldStandardSpecificDrugProduct) {
  return idHelper.associatedId(
    goldStandardSpecificDrugProduct,
    'generic_product',
    goldStandardSpecificDrugProductHelper,
    "goldStandardGenericProduct",
    "generic_product_id"
  )
}

function goldStandardGenericProductName(goldStandardSpecificDrugProduct) {
  return goldStandardGenericProductHelper.name(goldStandardSpecificDrugProductHelper.goldStandardGenericProduct(goldStandardSpecificDrugProduct))
}

function name(goldStandardSpecificDrugProduct) {
  return fieldHelper.getField(goldStandardSpecificDrugProduct, "name")
}

function specificDrugProductId(goldStandardSpecificDrugProduct) {
  return idHelper.id(goldStandardSpecificDrugProduct, "specific_drug_product_id")
}

function synonym(goldStandardSpecificDrugProduct) {
  return fieldHelper.getField(goldStandardSpecificDrugProduct, "synonym")
}

