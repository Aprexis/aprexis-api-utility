import { fieldHelper } from '../field.helper'
import { idHelper } from '../id.helper'

export const placeOfServiceHelper = {
  ...idHelper,
  name
}

function name(placeOfService) {
  return fieldHelper.getField(placeOfService, 'name')
}
