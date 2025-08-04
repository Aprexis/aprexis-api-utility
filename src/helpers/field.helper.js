import { valueHelper } from './value.helper.js'

export const fieldHelper = {
  addEntry,
  changeDate,
  changeDateTime,
  changeTime,
  changeValue,
  changeValues,
  combineValues,
  fieldName,
  getField,
  listField,
  method,
  name,
  removeEntry,
  unchanged
}

function addEntryToList(model, field, newEntry) {
  const entries = model[field]
  if (!valueHelper.isValue(entries)) {
    return [newEntry]
  }

  return [...entries, newEntry]
}

function addEntry(modelName, model, changedModel, field, matchField, newEntry) {
  const entries = model[field]
  const changedEntries = changedModel[field]
  if (valueHelper.isValue(entries)) {
    const existingEntry = entries.find((entry) => entry[matchField] == newEntry[matchField])
    if (valueHelper.isValue(existingEntry)) {
      return unchanged(modelName, model, changedModel, `${field} already has an entry`)
    }
  }

  if (valueHelper.isValue(changedEntries)) {
    const existingChangedEntry = changedEntries.find((changedEntry) => changedEntry[matchField] == newEntry[matchField])
    if (valueHelper.isValue(existingChangedEntry)) {
      return restoreOldEntry(modelName, model, changedModel, field, existingChangedEntry)
    }
  }

  return addNewEntry(modelName, model, changedModel, field, newEntry)

  function addNewEntry(modelName, model, changedModel, field, newEntry) {
    return {
      [modelName]: { ...model, [field]: addEntryToList(model, field, newEntry) },
      [valueHelper.changedModelName(modelName)]: { ...changedModel, [field]: addEntryToList(changedModel, field, newEntry) }
    }
  }

  function restoreOldEntry(modelName, model, changedModel, field, oldEntry) {
    const restoredEntry = [...oldEntry]
    delete restoredEntry['_destroy']
    const newChangedEntries = changedModel[field].filter((changedEntry) => changedEntry != oldEntry)

    return {
      [modelName]: { ...model, [field]: addEntryToList(model, field, restoredEntry) },
      [valueHelper.changedModelName(modelName)]: { ...changedModel, newChangedEntries }
    }
  }
}

function changeDate(modelName, model, changedModel, fieldName, date, dateValid) {
  const nameValid = `${fieldName}_DVALID`
  const updatedValid = { ...model[nameValid], ...dateValid }
  return fieldHelper.changeValues(
    modelName,
    model,
    changedModel,
    { [fieldName]: date, [nameValid]: updatedValid }
  )
}

function changeDateTime(modelName, model, changedModel, fieldName, dateTime, dateTimeValid) {
  const nameValid = `${fieldName}_DTVALID`
  const updatedValid = { ...model[nameValid], ...dateTimeValid }
  return fieldHelper.changeValues(
    modelName,
    model,
    changedModel,
    { [fieldName]: dateTime, [nameValid]: updatedValid }
  )
}

function changeTime(modelName, model, changedModel, fieldName, time, timeValid) {
  const nameValid = `${fieldName}_TVALID`
  const updatedValid = { ...model[timeValid], ...timeValid }

  return fieldHelper.changeValues(
    modelName,
    model,
    changedModel,
    { [fieldName]: time, [nameValid]: updatedValid }
  )
}

function changeValue(modelName, model, changedModel, name, value) {
  return {
    [modelName]: {
      ...model,
      [name]: value
    },
    [valueHelper.changedModelName(modelName)]: {
      ...changedModel,
      [name]: value
    }
  }
}

function changeValues(modelName, model, changedModel, changedValues) {
  let updated = {
    [modelName]: model,
    [valueHelper.changedModelName(modelName)]: changedModel
  }

  Object.keys(changedValues).forEach(
    (name) => {
      const value = changedValues[name]

      updated = fieldHelper.changeValue(
        modelName,
        updated[modelName],
        updated[valueHelper.changedModelName(modelName)],
        name,
        value
      )
    }
  )

  return {
    [modelName]: updated[modelName],
    [valueHelper.changedModelName(modelName)]: updated[valueHelper.changedModelName(modelName)]
  }
}

function combineValues(...values) {
  if (!valueHelper.isValue(values)) {
    return
  }

  const filteredValues = values.filter((value) => valueHelper.isStringValue(value))
  if (filteredValues.length === 0) {
    return
  }

  return filteredValues.join(' ')
}

function fieldName(fieldName, prefix) {
  if (!valueHelper.isStringValue(prefix)) {
    return fieldName
  }

  return `${prefix}_${fieldName} `
}

function getField(object, fieldName, prefix) {
  if (!valueHelper.isValue(object)) {
    return
  }

  return object[fieldHelper.fieldName(fieldName, prefix)]
}

function listField(value) {
  if (!valueHelper.isValue(value)) {
    return ''
  }

  switch (typeof value) {
    case 'boolean':
      return valueHelper.yesNo(value)

    default:
      return valueHelper.makeString(value)
  }
}

function method({ fieldLabel, fieldMethod, fieldName }) {
  if (valueHelper.isValue(fieldMethod)) {
    return fieldMethod
  }

  if (valueHelper.isStringValue(fieldName)) {
    return valueHelper.camelCase(fieldName)
  }

  return valueHelper.camelCase(fieldLabel)
}

function name({ fieldLabel, fieldMethod, fieldName }) {
  if (valueHelper.isValue(fieldName)) {
    return fieldName
  }

  if (valueHelper.isValue(fieldMethod)) {
    return valueHelper.snakeCase(fieldMethod)
  }

  return valueHelper.snakeCase(fieldLabel)
}

function removeEntry(modelName, model, changedModel, field, matchField, oldEntry) {
  if (valueHelper.isNumberValue(oldEntry.id)) {
    return destroyExistingEntry(modelName, model, changedModel, field, matchField, oldEntry)
  }

  return removeAddedEntry(modelName, model, changedModel, field, matchField, oldEntry)

  function destroyExistingEntry(modelName, model, changedModel, field, matchField, oldEntry) {
    const entries = model[field]
    if (!valueHelper.isValue(entries)) {
      return fieldHelper.unchanged(modelName, model, changedModel, `${field} does not have entries to remove`)
    }

    const newEntries = entries.filter((entry) => entry[matchField] != oldEntry[matchField])
    const destroyEntry = { ...oldEntry, '_destroy': true }
    const newChangedEntries = addEntryToList(changedModel, field, destroyEntry)
    return {
      [modelName]: { ...model, [field]: newEntries },
      [valueHelper.changedModelName(modelName)]: { ...changedModel, [field]: newChangedEntries }
    }
  }

  function removeAddedEntry(modelName, model, changedModel, field, matchField, addedEntry) {
    const entries = model[field]
    if (!valueHelper.isValue(entries)) {
      return fieldHelper.unchanged(modelName, model, changedModel, `${field} does not have entries to remove`)
    }

    const changedEntries = changedModel[field]
    if (!valueHelper.isValue(changedEntries)) {
      return fieldHelper.unchanged(modelName, model, changedModel, `${field} does not contain an added entry to remove`)
    }

    const newEntries = entries.filter((entry) => entry[matchField] != oldEntry[matchField])
    const newChangedEntries = changedEntries.filter((changedEntry) => changedEntry[matchField] == oldEntry[matchField])
    return {
      [modelName]: { ...model, [field]: newEntries },
      [valueHelper.changedModelName(modelName)]: { ...changedModel, [field]: newChangedEntries }
    }
  }
}

function unchanged(modelName, model, changedModel, warning, onWarning) {
  if (valueHelper.isStringValue(warning) && valueHelper.isFunction(onWarning)) {
    onWarning(warning)
  }

  return {
    [modelName]: model,
    [valueHelper.changedModelName(modelName)]: changedModel
  }
}
