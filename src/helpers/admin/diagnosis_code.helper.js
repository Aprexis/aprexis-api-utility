import { fieldHelper } from '../field.helper.js'
import { valueHelper } from '../value.helper.js'
import { idHelper } from '../id.helper.js'
import { diagnosisCodes } from '../../types/diagnosis_codes.type.js'

export const diagnosisCodeHelper = {
  ...idHelper,
  billable,
  canDelete,
  canEdit,
  code,
  longDescription,
  shortDescription,
  type,
  typeLabel
}

function billable(diagnosisCode) {
  return fieldHelper.getField(diagnosisCode, 'billable')
}

function canDelete(_user, _diagnosisCode) {
  return false
}

function canEdit(_user, _diagnosisCode) {
  return false
}

function code(diagnosisCode) {
  return fieldHelper.getField(diagnosisCode, 'code')
}

function longDescription(diagnosisCode) {
  return fieldHelper.getField(diagnosisCode, 'long_description')
}

function shortDescription(diagnosisCode) {
  return fieldHelper.getField(diagnosisCode, 'short_description')
}

function type(diagnosisCode) {
  return fieldHelper.getField(diagnosisCode, 'type')
}

function typeLabel(diagnosisCode) {
  const type = diagnosisCodeHelper.type(diagnosisCode)
  if (!valueHelper.isStringValue(type)) {
    return ''
  }

  return diagnosisCodes[type]
}
