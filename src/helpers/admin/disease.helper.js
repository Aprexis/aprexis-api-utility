import { fieldHelper } from '../field.helper'
import { idHelper } from '../id.helper'

export const diseaseHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  description,
  name,
  questionKey
}

function canDelete(_user, _disease) {
  return false
}

function canEdit(_user, _disease) {
  return false
}

function description(disease) {
  return fieldHelper.getField(disease, 'description')
}

function name(disease) {
  return fieldHelper.getField(disease, 'name')
}

function questionKey(disease) {
  return fieldHelper.getField(disease, 'question_key')
}
