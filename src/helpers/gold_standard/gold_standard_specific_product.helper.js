import { fieldHelper, idHelper } from '..'
import { goldStandardSpecificDrugProductHelper } from './gold_standard_specific_drug_product.helper'

export const goldStandardSpecificProductHelper = {
  canDelete,
  canEdit,
  goldStandardSpecificDrugProduct,
  goldStandardSpecificDrugProductId,
  goldStandardSpecificDrugProductName,
  goldStandardSpecificNondrugProduct,
  goldStandardSpecificNondrugProductId,
  name,
  specificProductId,
  synonym
}

function canDelete(_user, _goldStandardSpecificProduct) {
  return false
}

function canEdit(_user, _goldStandardSpecificProduct) {
  return false
}

function goldStandardSpecificDrugProduct(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'specific_drug_product')
}

function goldStandardSpecificDrugProductId(goldStandardSpecificProduct) {
  return idHelper.associatedId(
    goldStandardSpecificProduct,
    'specific_drug_product',
    goldStandardSpecificProductHelper,
    "goldStandardSpecificDrugProduct",
    "specific_drug_product_id"
  )
}

function goldStandardSpecificDrugProductName(goldStandardSpecificProduct) {
  return goldStandardSpecificDrugProductHelper.name(goldStandardSpecificProductHelper.goldStandardSpecificDrugProduct(goldStandardSpecificProduct))
}

function goldStandardSpecificNondrugProduct(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'specific_nondrug_product')
}

function goldStandardSpecificNondrugProductId(goldStandardSpecificProduct) {
  return idHelper.associatedId(
    goldStandardSpecificProduct,
    'specific_nondrug_product',
    goldStandardSpecificProductHelper,
    "goldStandardSpecificNondrugProduct",
    "specific_nondrug_product_id"
  )
}

function name(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'name')
}

function specificProductId(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'specific_product_id')
}

function synonym(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'synonym')
}
