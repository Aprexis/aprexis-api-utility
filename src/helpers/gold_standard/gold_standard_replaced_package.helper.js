import { fieldHelper, idHelper } from '../'

export const goldStandardReplacedPackageHelper = {
  goldStandardReplacedByPackage,
  goldStandardReplacedByPackageId,
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

function replacedDate(goldStandardReplacedPackage) {
  return fieldHelper.getField(goldStandardReplacedPackage, 'replaced_date')
}
