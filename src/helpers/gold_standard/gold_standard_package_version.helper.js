import { fieldHelper, idHelper, modelDatesHelper } from '../'
import { goldStandardInnerOuterHelper } from './gold_standard_inner_outer.helper'
import { goldStandardNcpdpHelper } from './gold_standard_ncpdp.helper'
import { goldStandardReplacedPackageHelper } from './gold_standard_replaced_package.helper'

export const goldStandardPackageVersionHelper = {
  ...modelDatesHelper,
  ...goldStandardInnerOuterHelper,
  ...goldStandardNcpdpHelper,
  ...goldStandardReplacedPackageHelper,
  canDelete,
  canEdit,
  formattedPackageIdentifier,
  goldStandardPackage,
  goldStandardProductId,
  goldStandardProduct,
  goldStandardPackageId,
  packageDescriptorText,
  packageIdentifier,
  packageIdentifierType,
  packageSize,
  packageVersionDescription,
  packageVersionOffMarketDate,
  packageVersionOnMarketDate,
  preservativeFree,
  unformattedNcd10,
  version
}

function canDelete(_user, _goldStandardPackageVersion) {
  return false
}

function canEdit(_user, _goldStandardPackageVersion) {
  return false
}

function formattedPackageIdentifier(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'formatted_package_identifier')
}

function goldStandardPackage(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package')
}

function goldStandardPackageId(goldStandardPackageVersion) {
  return idHelper.associatedId(
    goldStandardPackageVersion,
    'package',
    goldStandardPackageVersionHelper,
    "goldStandardPackage",
    "package_id"
  )
}

function goldStandardProduct(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'product')
}

function goldStandardProductId(goldStandardPackageVersion) {
  return idHelper.associatedId(
    goldStandardPackageVersion,
    'product',
    goldStandardPackageVersionHelper,
    "goldStandardProduct",
    "product_id"
  )
}

function packageDescriptorText(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_descriptor_text')
}

function packageIdentifier(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_identifier')
}

function packageIdentifierType(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_identifier_type')
}

function packageSize(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_size')
}
function packageVersionDescription(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_version_description')
}

function packageVersionOffMarketDate(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_version_off_market_date')
}

function packageVersionOnMarketDate(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'package_version_on_market_date')
}

function preservativeFree(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'preservative_free')
}

function unformattedNcd10(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'unformatted_ndc10')
}

function version(goldStandardPackageVersion) {
  return fieldHelper.getField(goldStandardPackageVersion, 'version')
}
