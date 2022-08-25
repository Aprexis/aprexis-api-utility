import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'

export const placeOfServiceHelper = {
  ...idHelper,
  code,
  name
}

function code(placeOfService) {
  return fieldHelper.getField(placeOfService, 'code')
}

function name(placeOfService) {
  return fieldHelper.getField(placeOfService, 'name')
}
