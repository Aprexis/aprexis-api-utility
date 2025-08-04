import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'

export const modelDatesHelper = {
  createdAt,
  displayCreatedAt,
  displayUpdatedAt,
  updatedAt
}

function createdAt(model) {
  return fieldHelper.getField(model, 'created_at')
}

function displayCreatedAt(model) {
  return dateHelper.displayDateTime(modelDatesHelper.createdAt(model))
}

function displayUpdatedAt(model) {
  return dateHelper.displayDateTime(modelDatesHelper.updatedAt(model))
}

function updatedAt(model) {
  return fieldHelper.getField(model, 'updated_at')
}
