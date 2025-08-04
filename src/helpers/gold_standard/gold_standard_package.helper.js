import { fieldHelper, idHelper, modelDatesHelper, } from '../index.js'
import { goldStandardInnerOuterHelper } from './gold_standard_inner_outer.helper.js'
import { goldStandardNcpdpHelper } from './gold_standard_ncpdp.helper.js'
import { goldStandardProductHelper } from './gold_standard_product.helper.js'
import { goldStandardReplacedPackageHelper } from './gold_standard_replaced_package.helper.js'

export const goldStandardPackageHelper = {
  ...modelDatesHelper,
  ...goldStandardInnerOuterHelper,
  ...goldStandardNcpdpHelper,
  ...goldStandardReplacedPackageHelper,
  canDelete,
  canEdit,
  goldStandardProduct,
  goldStandardProductId,
  goldStandardProductNameLong,
  goldStandardProductNameShort,
  goldStandardUnitDoseType,
  goldStandardUnitDoseTypeId,
  gtin12,
  gtin14,
  lotExpiry,
  medicationLabel,
  minimumDispenseQuantity,
  minimumDispenseQuantityIsManual,
  ndc10,
  ndc11,
  nhric,
  notSplittable,
  offMarket,
  packageDescription,
  packageDescriptorText,
  packageId,
  packageOnMarketDate,
  packageSize,
  pin,
  preservativeFree,
  shortCycleDispensing,
  shortCycleDispensingIsManual,
  upc
}

function canDelete(_user, _goldStandardPackage) {
  return false
}

function canEdit(_user, _goldStandardPackage) {
  return false
}

function goldStandardProduct(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'product')
}

function goldStandardProductId(goldStandardPackage) {
  return idHelper.associatedId(
    goldStandardPackage,
    'product',
    goldStandardPackageHelper,
    "goldStandardProduct",
    "product_id"
  )
}

function goldStandardProductNameLong(goldStandardPackage) {
  return goldStandardProductHelper.productNameLong(
    goldStandardPackageHelper.goldStandardProduct(goldStandardPackage)
  )
}

function goldStandardProductNameShort(goldStandardPackage) {
  return goldStandardProductHelper.productNameShort(
    goldStandardPackageHelper.goldStandardProduct(goldStandardPackage)
  )
}

function goldStandardUnitDoseType(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'unit_dose_type')
}

function goldStandardUnitDoseTypeId(goldStandardPackage) {
  return idHelper.associatedId(
    goldStandardPackage,
    'unit_dose_type',
    goldStandardPackageHelper,
    "goldStandardUnitDoseType",
    "unit_dose_type_id"
  )
}

function gtin12(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'gtin12')
}

function gtin14(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'gtin14')
}

function lotExpiry(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'lot_expiry')
}

function medicationLabel(goldStandardPackage) {
  return goldStandardProductHelper.medicationLabel(goldStandardPackageHelper.goldStandardProduct(goldStandardPackage))
}

function minimumDispenseQuantity(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'minimum_dispense_quantity')
}

function minimumDispenseQuantityIsManual(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'minimum_dispense_quantity_is_manual')
}

function ndc10(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ndc10')
}

function ndc11(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ndc11')
}

function nhric(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'nhric')
}

function notSplittable(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'not_splittable')
}

function offMarket(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'off_market')
}

function packageDescription(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_description')
}

function packageDescriptorText(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_descriptor_text')
}

function packageId(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_id')
}

function packageOnMarketDate(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_on_market_date')
}

function packageSize(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_size')
}

function pin(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'pin')
}

function preservativeFree(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'preservative_free')
}

function shortCycleDispensing(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'short_cycle_dispensing')
}

function shortCycleDispensingIsManual(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'short_cycle_dispensing_is_manual')
}

function upc(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'upc')
}
