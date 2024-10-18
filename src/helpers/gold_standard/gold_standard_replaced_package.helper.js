import { goldStandardPackageHelper } from '.'
import { fieldHelper, idHelper } from '../'

export const goldStandardReplacedPackageHelper = {
  goldStandardReplacedByPackage,
  goldStandardReplacedByPackageId,
  goldStandardReplacedByPackageDescription,
  replacedDate
}

function goldStandardReplacedByPackage(goldStandardReplacedPackage) {
  return fieldHelper.getField(goldStandardReplacedPackage, 'replaced_by_package')
}

function goldStandardReplacedByPackageId(goldStandardReplacedPackage) {
  return idHelper.associatedId(
    goldStandardReplacedPackage,
    'replaced_by_package',
    goldStandardReplacedPackageHelper,
    "goldStandardReplacedByPackage",
    "replaced_by_package_id"
  )
}

function goldStandardReplacedByPackageDescription(goldStandardReplacedPackage) {
  return goldStandardPackageHelper.packageDescription(
    goldStandardReplacedPackageHelper.goldStandardReplacedByPackage(goldStandardReplacedPackage)
  )
}

function replacedDate(goldStandardReplacedPackage) {
  return fieldHelper.getField(goldStandardReplacedPackage, 'replaced_date')
}
