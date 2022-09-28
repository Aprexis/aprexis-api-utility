import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { patientHelper } from './patient.helper'
import { questionHelper } from './question.helper'
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

export const answerHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  displayValue,
  patient,
  patientId,
  pharmacyStore,
  pharmacyStoreId,
  question,
  questionKey,
  questionType,
  value
}

function canDelete(_user, _answer) {
  return false
}

function canEdit(user, answer) {
  const patient = answerHelper.patient(answer)

  return patientHelper.canEdit(user, patient, patientHelper.healthPlan(patient))
}

function displayValue(answer) {
  const value = answerHelper.value(answer)
  const question = answerHelper.question(answer)
  if (!valueHelper.isStringValue(value) || !valueHelper.isValue(question)) {
    return value
  }

  return questionHelper.displayValue(question, value)
}

function patient(answer) {
  return fieldHelper.getField(answer, 'patient')
}

function patientId(answer) {
  const answerId = fieldHelper.getField('answer', 'patient_id')
  if (valueHelper.isNumberValue(answerId)) {
    return answerId
  }

  return patientHelper.id(answerHelper.patient(answer))
}

function pharmacyStore(answer) {
  return fieldHelper.getField(answer, 'pharmacy_store')
}

function pharmacyStoreId(answer) {
  return idHelper.associatedId(answer, 'pharmacy_store', answerHelper)
}

function question(answer) {
  return fieldHelper.getField(answer, 'question')
}

function questionKey(answer) {
  return fieldHelper.getField(answer, 'question_key')
}

function questionType(answer) {
  return questionHelper.questionType(answerHelper.question(answer))
}

function value(answer) {
  return fieldHelper.getField(answer, 'value')
}
