import { fieldHelper } from '../field.helper.js'
import { idHelper } from '../id.helper.js'

export const placeOfServiceHelper = {
  ...idHelper,
  name
}

function name(placeOfService) {
  return fieldHelper.getField(placeOfService, 'name')
}
