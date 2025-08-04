import { fieldHelper, idHelper } from '../index.js'

export const goldStandardInnerOuterHelper = {
  goldStandardInnerPackageUnit,
  goldStandardInnerPackageUnitId,
  goldStandardOuterPackageUnit,
  goldStandardOuterPackageUnitId,
  innerPackageCount
}

function goldStandardInnerPackageUnit(goldStandardInnerOuter) {
  return fieldHelper.getField(goldStandardInnerOuter, 'inner_package_unit')
}

function goldStandardInnerPackageUnitId(goldStandardInnerOuter) {
  return idHelper.associatedId(
    goldStandardInnerOuter,
    'inner_package_unit',
    goldStandardInnerOuterHelper,
    "goldStandardInnerPackageUnit",
    "inner_package_unit_id"
  )
}

function goldStandardOuterPackageUnit(goldStandardInnerOuter) {
  return fieldHelper.getField(goldStandardInnerOuter, 'outer_package_unit')
}

function goldStandardOuterPackageUnitId(goldStandardInnerOuter) {
  return idHelper.associatedId(
    goldStandardInnerOuter,
    'outer_package_unit',
    goldStandardInnerOuterHelper,
    "goldStandardOuterPackageUnit",
    "outer_package_unit_id"
  )
}

function innerPackageCount(goldStandardInnerOuter) {
  return fieldHelper.getField(goldStandardInnerOuter, 'inner_package_count')
}
