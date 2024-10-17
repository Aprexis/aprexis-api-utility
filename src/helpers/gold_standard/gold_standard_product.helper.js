import { fieldHelper, idHelper, valueHelper } from '../'
import { medicationHelper } from '../admin'

export const goldStandardProductHelper = {
  bulkChemical,
  canDelete,
  canEdit,
  cpNum,
  ePrescribingName,
  goldStandardBrandGenericStatus,
  goldStandardBrandGenericStatusId,
  goldStandardDesiClassification,
  goldStandardDesiClassificationId,
  goldStandardDesiStatus,
  goldStandardDesiStatusId,
  goldStandardLegendStatus,
  goldStandardLegendStatusId,
  goldStandardLimitedDistribution,
  goldStandardLimitedDistributionId,
  goldStandardLicenseType,
  goldStandardLicenseTypeId,
  goldStandardMarketedProduct,
  goldStandardMarketedProductId,
  goldStandardMarketer,
  goldStandardMarketerId,
  goldStandardProductNameType,
  goldStandardProductNameTypeId,
  goldStandardReplacedByProduct,
  goldStandardReplacedByProductId,
  innovator,
  medicationLabel,
  medications,
  ndc9,
  offMarketDate,
  privateLabel,
  productId,
  productNameLong,
  productNameShort,
  productOnMarketDate,
  repackaged
}

function bulkChemical(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'bulk_chemical')
}

function canDelete(_user, _goldStandardProduct) {
  return false
}

function canEdit(_user, _goldStandardProduct) {
  return false
}

function cpNum(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'cp_num')
}

function ePrescribingName(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'e_prescribing_name')
}

function goldStandardBrandGenericStatus(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "brand_generic_status")
}

function goldStandardBrandGenericStatusId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'brand_generic_status',
    goldStandardBrandGenericStatus,
    "goldStandardDesiClassification",
    "brand_generic_status_id"
  )
}

function goldStandardDesiClassification(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "desi_classification")
}

function goldStandardDesiClassificationId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'desi_classification',
    goldStandardProductHelper,
    "goldStandardDesiClassification",
    "desi_classification_id"
  )
}

function goldStandardDesiStatus(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "desi_status")
}

function goldStandardDesiStatusId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'desi_status',
    goldStandardProductHelper,
    "goldStandardDesiStatus",
    "desi_status_id"
  )
}

function goldStandardLegendStatus(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "legend_status")
}

function goldStandardLegendStatusId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'legend_status',
    goldStandardLegendStatus,
    "goldStandardLegendStatus",
    "legend_status_id"
  )
}

function goldStandardLimitedDistribution(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "limited_distribution")
}

function goldStandardLimitedDistributionId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'limited_distribution',
    goldStandardLimitedDistribution,
    "goldStandardLegendStatus",
    "limited_distribution_id"
  )
}

function goldStandardLicenseType(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "license_type")
}

function goldStandardLicenseTypeId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'license_type',
    goldStandardLicenseType,
    "goldStandardLicenseType",
    "license_type_id"
  )
}

function goldStandardMarketedProduct(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "marketed_product")
}

function goldStandardMarketedProductId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'marketed_product',
    goldStandardProductHelper,
    "goldStandardMarketedProduct",
    "marketed_product_id"
  )
}

function goldStandardMarketer(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "marketer")
}

function goldStandardMarketerId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'marketer',
    goldStandardProductHelper,
    "goldStandardMarketer",
    "marketer_id"
  )
}

function goldStandardProductNameType(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "product_name_type")
}

function goldStandardProductNameTypeId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'product_name_type',
    goldStandardProductHelper,
    "goldStandardProductNameType",
    "product_name_type_id"
  )
}

function goldStandardReplacedByProduct(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "replaced_by_product")
}

function goldStandardReplacedByProductId(goldStandardProduct) {
  return idHelper.associatedId(
    goldStandardProduct,
    'replaced_by_product',
    goldStandardProductHelper,
    "goldStandardReplacedByProduct",
    "replaced_by_product_id"
  )
}

function innovator(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, "innovator")
}

function medicationLabel(goldStandardProduct) {
  medications = goldStandardProductHelper.medications(goldStandardProduct)

  return medicationHelper.label(medicationByNdc9(medications, goldStandardProductHelper.ndc9(goldStandardProduct)))

  function medicationByNdc9(medications, ndc9) {
    if (!valueHelper.isValue(medications) || medications.size == 0) {
      return
    }

    const medication = medications.find((m) => medicationHelper.productNdc(m) == ndc9)
    if (valueHelper.isValue(medication)) {
      return medication
    }

    return medications[0]
  }
}

function medications(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'medications')
}

function ndc9(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'ndc9')
}

function offMarketDate(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'off_market_date')
}

function privateLabel(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'private_label')
}

function productId(goldStandardProduct) {
  return idHelper.id(goldStandardProduct, "product_id")
}

function productNameLong(goldStandardProduct) {
  return idHelper.id(goldStandardProduct, "product_name_long")
}

function productNameShort(goldStandardProduct) {
  return idHelper.id(goldStandardProduct, "product_name_short")
}

function productOnMarketDate(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'product_on_market_date')
}

function repackaged(goldStandardProduct) {
  return idHelper.id(goldStandardProduct, "repackaged")
}

