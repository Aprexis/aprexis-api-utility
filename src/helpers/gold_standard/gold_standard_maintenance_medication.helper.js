import { fieldHelper, idHelper, modelDatesHelper } from '../index.js'
import { goldStandardSpecificProductHelper } from './gold_standard_specific_product.helper.js'
import { goldStandardMarketedProductHelper } from './gold_standard_marketed_product.helper.js'
import { goldStandardPackageHelper } from './gold_standard_package.helper.js'
import { goldStandardProductHelper } from './gold_standard_product.helper.js'

export const goldStandardMaintenanceMedicationHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  goldStandardMarketedProduct,
  goldStandardMarketedProductId,
  goldStandardMarketedProductName,
  goldStandardPackage,
  goldStandardPackageDescription,
  goldStandardPackageId,
  goldStandardProduct,
  goldStandardProductId,
  goldStandardProductNameLong,
  goldStandardProductNameShort,
  goldStandardSpecificProduct,
  goldStandardSpecificProductId,
  goldStandardSpecificProductName,
  ndc11
}

function canDelete(_user, _goldStandardMaintenanceMedication) {
  return false
}

function canEdit(_user, _goldStandardMaintenanceMedication) {
  return false
}

function goldStandardMarketedProduct(goldStandardMaintenanceMedication) {
  return fieldHelper.getField(goldStandardMaintenanceMedication, "marketed_product")
}

function goldStandardMarketedProductId(goldStandardMaintenanceMedication) {
  return idHelper.associatedId(
    goldStandardMaintenanceMedication,
    'marketed_product',
    goldStandardMaintenanceMedicationHelper,
    "goldStandardMarketedProduct",
    "marketed_product_id"
  )
}

function goldStandardMarketedProductName(goldStandardMaintenanceMedication) {
  return goldStandardMarketedProductHelper.name(
    goldStandardMaintenanceMedicationHelper.goldStandardMarketedProduct(goldStandardMaintenanceMedication)
  )
}
function goldStandardPackage(goldStandardMaintenanceMedication) {
  return fieldHelper.getField(goldStandardMaintenanceMedication, 'package')
}

function goldStandardPackageDescription(goldStandardMaintenanceMedication) {
  return goldStandardPackageHelper.packageDescription(
    goldStandardMaintenanceMedicationHelper.goldStandardPackage(goldStandardMaintenanceMedication)
  )
}

function goldStandardPackageId(goldStandardMaintenanceMedication) {
  return idHelper.associatedId(
    goldStandardMaintenanceMedication,
    'package',
    goldStandardMaintenanceMedicationHelper,
    "goldStandardPackage",
    "package_id"
  )
}

function goldStandardProduct(goldStandardMaintenanceMedication) {
  return fieldHelper.getField(goldStandardMaintenanceMedication, 'product')
}

function goldStandardProductId(goldStandardMaintenanceMedication) {
  return idHelper.associatedId(
    goldStandardMaintenanceMedication,
    'product',
    goldStandardMaintenanceMedicationHelper,
    "goldStandardProduct",
    "product_id"
  )
}

function goldStandardProductNameLong(goldStandardMaintenanceMedication) {
  return goldStandardProductHelper.productNameLong(
    goldStandardMaintenanceMedicationHelper.goldStandardProduct(goldStandardMaintenanceMedication)
  )
}

function goldStandardProductNameShort(goldStandardMaintenanceMedication) {
  return goldStandardProductHelper.productNameShort(
    goldStandardMaintenanceMedicationHelper.goldStandardProduct(goldStandardMaintenanceMedication)
  )
}

function goldStandardSpecificProduct(goldStandardMaintenanceMedication) {
  return fieldHelper.getField(goldStandardMaintenanceMedication, "specific_product")
}

function goldStandardSpecificProductId(goldStandardMaintenanceMedication) {
  return idHelper.associatedId(
    goldStandardMaintenanceMedication,
    'specific_product',
    goldStandardMaintenanceMedicationHelper,
    "goldStandardSpecificProduct",
    "specific_product_id"
  )
}

function goldStandardSpecificProductName(goldStandardMaintenanceMedication) {
  return goldStandardSpecificProductHelper.name(
    goldStandardMaintenanceMedicationHelper.goldStandardSpecificProduct(goldStandardMaintenanceMedication)
  )
}

function ndc11(goldStandardMaintenanceMedication) {
  return goldStandardPackageHelper.ndc11(
    goldStandardMaintenanceMedicationHelper.goldStandardPackage(goldStandardMaintenanceMedication)
  )
}
