import { valueHelper } from './value.helper.js'
import { apiHelper } from './api.helper.js'
import { fieldHelper } from './field.helper.js'
import { patientHelper } from './patient.helper.js'
import { questionHelper } from './question.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const answerHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
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
  toJSON,
  value
}

const answerKeys = [
  'id',
  'intervention_id',
  'patient_id',
  'pharmacy_store_id',
  'user_id',
  'question_key',
  'value'
]

function buildChanged(answer, changedAnswer) {
  if (valueHelper.isValue(changedAnswer)) {
    return changedAnswer
  }

  if (valueHelper.isValue(answer.id)) {
    return copyIdentifiers(answer)
  }

  return answerHelper.buildNewChanged(answer)

  function copyIdentifiers(answer) {
    return {
      id: answer.id,
      intervention_id: answer.intervention_id,
      patient_id: answer.patient_id,
      pharmacy_store_id: answer.pharmacy_store_id,
      user_id: answer.user_id,
      question_key: answer.question_key
    }
  }
}

function buildNewChanged(answer) {
  return {
    ...answer
  }
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

function toJSON(answer) {
  return apiHelper.toJSON(answer, answerKeys)
}

function value(answer) {
  return fieldHelper.getField(answer, 'value')
}
