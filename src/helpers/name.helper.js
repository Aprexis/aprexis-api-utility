import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'

export const nameHelper = {
  firstName,
  initials,
  lastName,
  middleName,
  name
}

function firstName(namedModel, prefix = '') {
  return fieldHelper.getField(namedModel, 'first_name', prefix)
}

function initials(namedModel, prefix = '') {
  const firstName = nameHelper.firstName(namedModel, prefix)
  const lastName = nameHelper.lastName(namedModel, prefix)

  if (!valueHelper.isStringValue(firstName)) {
    if (!valueHelper.isStringValue(lastName)) {
      return 'UN'
    }

    return `${lastName.charAt(0)}`
  }
  if (!valueHelper.isStringValue(lastName)) {
    return `${firstName.charAt(0)}`
  }

  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

function lastName(namedModel, prefix = '') {
  return fieldHelper.getField(namedModel, 'last_name', prefix)
}

function middleName(namedModel, prefix = '') {
  return fieldHelper.getField(namedModel, 'middle_name', prefix)
}

function name(namedModel, modelName, prefix = '', allowBlank = false) {
  if (!valueHelper.isValue(namedModel)) {
    if (valueHelper.isSet(allowBlank)) {
      return
    }

    return `No ${modelName}`
  }

  const name = fieldHelper.getField(namedModel, 'name')
  if (valueHelper.isStringValue(name)) {
    return name
  }

  const firstName = nameHelper.firstName(namedModel, prefix)
  const middleName = nameHelper.middleName(namedModel, prefix)
  const lastName = nameHelper.lastName(namedModel, prefix)
  let result = ''
  let resultPrefix = ''

  if (valueHelper.isStringValue(firstName)) {
    result = firstName
    resultPrefix = ' '
  }

  if (valueHelper.isStringValue(middleName)) {
    result = `${result}${resultPrefix}${middleName}`
    resultPrefix = ' '
  }

  if (valueHelper.isStringValue(lastName)) {
    result = `${result}${resultPrefix}${lastName}`
  }

  return result
}
