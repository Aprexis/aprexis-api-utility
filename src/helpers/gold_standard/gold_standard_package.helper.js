import { fieldHelper } from '../field.helper'
import { goldStandardProductHelper } from './gold_standard_product.helper'

export const goldStandardPackageHelper = {
  goldStandardProduct,
  innerPackageCount,
  medicationLabel,
  ndc10,
  ndc11,
  packageId,
  packageSize
}

function goldStandardProduct(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'product')
}

function innerPackageCount(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'inner_package_count')
}

function medicationLabel(goldStandardPackage) {
  return goldStandardProductHelper.medicationLabel(goldStandardProduct(goldStandardPackage))
}

function ndc10(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ndc10')
}

function ndc11(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'ndc11')
}

function packageId(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_id')
}

function packageSize(goldStandardPackage) {
  return fieldHelper.getField(goldStandardPackage, 'package_size')
}
