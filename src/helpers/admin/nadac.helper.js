import { idHelper } from '../id.helper'
import { fieldHelper } from '../field.helper'
import { modelDatesHelper } from '../model_dates.helper'
import { goldStandardPackageHelper } from '../gold_standard/gold_standard_package.helper'

export const nadacHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  medicationLabel,
  goldStandardPackage,
  packageInnerPackageCount,
  packagePackageSize,
  ndc11,
  unitPrice
}

function canDelete(_user, _nadac) {
  return false
}

function canEdit(_user, _nadac) {
  return false
}

function goldStandardPackage(nadac) {
  return fieldHelper.getField(nadac, 'package')
}

function medicationLabel(nadac) {
  return goldStandardPackageHelper.medicationLabel(nadacHelper.goldStandardPackage(nadac))
}

function packageInnerPackageCount(nadac) {
  return goldStandardPackageHelper.innerPackageCount(nadacHelper.goldStandardPackage(nadac))
}

function packagePackageSize(nadac) {
  return goldStandardPackageHelper.packageSize(nadacHelper.goldStandardPackage(nadac))
}

function ndc11(nadac) {
  return fieldHelper.getField(nadac, 'ndc11')
}

function unitPrice(nadac) {
  return fieldHelper.getField(nadac, 'unit_price')
}
