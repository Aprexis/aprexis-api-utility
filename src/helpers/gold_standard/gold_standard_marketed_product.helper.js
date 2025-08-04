import { goldStandardSpecificProductHelper } from './gold_standard_specific_product.helper.js'
import { fieldHelper, idHelper, modelDatesHelper } from '../index.js'

export const goldStandardMarketedProductHelper = {
  ...modelDatesHelper,
  brand,
  canDelete,
  canEdit,
  goldStandardCompany,
  goldStandardCompanyId,
  goldStandardSpecificProduct,
  goldStandardSpecificProductId,
  goldStandardSpecificProductName,
  marketedProductId,
  name,
  repackaged
}

function brand(goldStandardMarketedProduct) {
  return fieldHelper.getField(goldStandardMarketedProduct, 'brand')
}

function canDelete(_user, _goldStandardMarketedProduct) {
  return false
}

function canEdit(_user, _goldStandardMarketedProduct) {
  return false
}

function goldStandardCompany(goldStandardMarketedProduct) {
  return fieldHelper.getField(goldStandardMarketedProduct, "company")
}

function goldStandardCompanyId(goldStandardMarketedProduct) {
  return idHelper.associatedId(
    goldStandardMarketedProduct,
    'company',
    goldStandardMarketedProductHelper,
    "goldStandardCompany",
    "company_id"
  )
}

function goldStandardSpecificProduct(goldStandardMarketedProduct) {
  return fieldHelper.getField(goldStandardMarketedProduct, "specific_product")
}

function goldStandardSpecificProductId(goldStandardMarketedProduct) {
  return idHelper.associatedId(
    goldStandardMarketedProduct,
    'specific_product',
    goldStandardMarketedProductHelper,
    "goldStandardSpecificProduct",
    "specific_product_id"
  )
}

function goldStandardSpecificProductName(goldStandardMarketedProduct) {
  return goldStandardSpecificProductHelper.name(
    goldStandardMarketedProductHelper.goldStandardSpecificProduct(goldStandardMarketedProduct)
  )
}

function marketedProductId(goldStandardMarketedProduct) {
  return idHelper.id(goldStandardMarketedProduct, "marketed_product_id")
}

function name(goldStandardMarketedProduct) {
  return fieldHelper.getField(goldStandardMarketedProduct, 'name')
}

function repackaged(goldStandardMarketedProduct) {
  return fieldHelper.getField(goldStandardMarketedProduct, 'repackaged')
}
