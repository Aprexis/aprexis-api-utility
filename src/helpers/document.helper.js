import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { apiHelper } from './api.helper'
import { idHelper } from './id.helper'

const documentKeys = [
  'id',
  'health_plan_id',
  'slug'
]

export const documentHelper = {
  ...idHelper,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  contentType,
  createdAt,
  filename,
  healthPlanId,
  slug,
  toJSON,
  updatedAt
}

function buildChanged(document, changedDocument) {
  if (valueHelper.isValue(changedDocument)) {
    return changedDocument
  }

  if (valueHelper.isValue(document.id)) {
    return copyIdentifiers(document)
  }

  return documentHelper.buildNewChanged(document)

  function copyIdentifiers(document) {
    return {
      id: documentHelper.id(document),
      health_plan_id: documentHelper.healthPlanId(document)
    }
  }
}

function buildNewChanged(document) {
  return {
    ...document
  }
}
function canDelete(_user, _document) {
  return false
}

function canEdit(_user, _document) {
  return false
}

function canModifyField(_document, _fieldName) {
  return false
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('document', model, changedModel, fieldName, newValue)
}

function contentType(document) {
  return fieldHelper.getField(document, 'content_type')
}

function createdAt(document) {
  return fieldHelper.getField(document, 'created_at')
}

function filename(document) {
  return fieldHelper.getField(document, 'filename')
}

function healthPlanId(document) {
  return fieldHelper.getField(document, 'health_plan_id')
}

function slug(document) {
  return fieldHelper.getField(document, 'slug')
}

function toJSON(document) {
  return apiHelper.toJSON(document, documentKeys)
}

function updatedAt(document) {
  return fieldHelper.getField(document, 'updated_at')
}
