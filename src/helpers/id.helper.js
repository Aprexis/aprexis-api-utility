import { fieldHelper } from './field.helper'
import { valueHelper } from './value.helper'

export const idHelper = {
  associatedId,
  id
}

function associatedId(object, idFor, objectHelper) {
  const forName = valueHelper.camelCase(idFor)
  const associatedId = object[`${idFor}_id`]
  if (valueHelper.isNumberValue(associatedId)) {
    return associatedId
  }

  if (valueHelper.isFunction(objectHelper[forName])) {
    return idHelper.id(objectHelper[forName](object))
  }

  return
}

function id(object) {
  return fieldHelper.getField(object, 'id')
}
