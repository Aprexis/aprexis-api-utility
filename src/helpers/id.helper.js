import { fieldHelper } from './field.helper'
import { valueHelper } from './value.helper'

export const idHelper = {
  associatedId,
  id
}

function associatedId(object, idFor, objectHelper, methodName = null, methodIdField = 'id') {
  if (!valueHelper.isValue(object)) {
    return
  }

  const associatedId = object[`${idFor}_id`]
  if (valueHelper.isNumberValue(associatedId)) {
    return associatedId
  }

  const forName = valueHelper.isStringValue(methodName) ? methodName : valueHelper.camelCase(idFor)
  if (valueHelper.isFunction(objectHelper[forName])) {
    return idHelper.id(objectHelper[forName](object), methodIdField)
  }

  return
}

function id(object, idField = 'id') {
  return fieldHelper.getField(object, idField)
}
