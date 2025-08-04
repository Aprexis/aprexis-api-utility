import { fieldHelper } from '../field.helper.js'
import { idHelper } from '../id.helper.js'
import { valueHelper } from '../value.helper.js'

export const labTestHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  category,
  displayVital,
  fullName,
  isVital,
  keyCode,
  label,
  name,
  normalValue,
  units,
  vital
}

function canDelete(_user, _labTest) {
  return false
}

function canEdit(_user, _labTest) {
  return false
}

function category(labTest) {
  return fieldHelper.getField(labTest, 'category')
}

function displayVital(labTest) {
  if (!labTestHelper.isVital(labTest)) {
    return ''
  }

  return 'Vital'
}

function fullName(labTest) {
  return fieldHelper.getField(labTest, 'full_name')
}

function label(labTest) {
  if (!valueHelper.isValue(labTest)) {
    return ''
  }

  let value = `${labTestHelper.fullName(labTest)} [${labTestHelper.category(labTest)}`
  if (labTestHelper.isVital(labTest)) {
    value = `${value} (${labTestHelper.displayVital(labTest)})`
  }
  value = `${value}]`

  return value
}

function isVital(labTest) {
  return valueHelper.isSet(labTestHelper.vital(labTest))
}

function keyCode(labTest) {
  return fieldHelper.getField(labTest, 'key_code')
}

function name(labTest) {
  return fieldHelper.getField(labTest, 'name')
}

function normalValue(labTest) {
  return fieldHelper.getField(labTest, 'normal_value')
}

function units(labTest) {
  return fieldHelper.getField(labTest, 'units')
}

function vital(labTest) {
  return fieldHelper.getField(labTest, 'vital')
}
