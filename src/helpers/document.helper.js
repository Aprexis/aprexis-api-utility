import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { apiHelper } from './api.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

const documentKeys = [
  'id',
  'health_plan_id',
  'slug'
]

export const documentHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  contentType,
  filename,
  healthPlan,
  healthPlanId,
  slug,
  toJSON
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

function filename(document) {
  return fieldHelper.getField(document, 'filename')
}

function healthPlan(document) {
  return fieldHelper.getField(document, 'health_plan')
}

function healthPlanId(document) {
  return idHelper.associatedId(document, 'health_plan', documentHelper)
}

function slug(document) {
  return fieldHelper.getField(document, 'slug')
}

function toJSON(document) {
  return apiHelper.toJSON(document, documentKeys)
}
