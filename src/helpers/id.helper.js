import { fieldHelper } from './field.helper'

export const idHelper = {
  id
}

function id(object) {
  return fieldHelper.getField(object, 'id')
}
