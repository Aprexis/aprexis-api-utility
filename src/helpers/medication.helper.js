import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'

export const medicationHelper = {
  ...idHelper,
  label,
  name
}

function label(medication) {
  return medicationHelper.name(medication)
}

function name(medication) {
  return fieldHelper.getField(medication, 'name')
}
