import { formatInTimeZone } from 'date-fns-tz'
import { apiHelper } from './api.helper.js'
import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { medicationHelper } from './admin/medication.helper.js'
import { patientHelper } from './patient.helper.js'
import { patientSupplementHelper } from './patient_supplement.helper.js'
import { userHelper } from './user.helper.js'
import { valueHelper } from './value.helper.js'
import { reminderActions, reminderTypes, timeZones } from '../types/index.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const reminderHelper = {
  ...idHelper,
  ...modelDatesHelper,
  action,
  addingReminderMedication,
  addingReminderSupplement,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  dayOfMonth,
  displayAction,
  displayMedications,
  displayPatientSupplements,
  displayRecurFrom,
  displayRecurTo,
  displayRemindAt,
  displayType,
  emailAddress,
  friday,
  isReminderActionValue,
  isReminderTypeValue,
  medications,
  monday,
  patient,
  patientId,
  patientName,
  patientSupplements,
  patientTimeZone,
  recurFrom,
  recurTo,
  remindAt,
  reminderMedications,
  reminderSupplements,
  saturday,
  sunday,
  thursday,
  toJSON,
  tuesday,
  txtNumber,
  type,
  voiceNumber,
  wednesday
}

const reminderKeys = [
  'id',
  'patient_id',
  'action',
  'day_of_month',
  'email_address',
  'friday',
  'monday',
  'recur_from',
  'recur_to',
  'remind_at',
  { key: 'reminder_medications', jsonKey: 'reminder_medications_attributes', childKeys: ['id', 'reminder_id', 'medication_id', '_destroy'] },
  { key: 'reminder_supplements', jsonKey: 'reminder_supplements_attributes', childKeys: ['id', 'reminder_id', 'patient_supplement_id', '_destroy'] },
  'saturday',
  'sunday',
  'thursday',
  'tuesday',
  'txt_number',
  'type',
  'voice_number',
  'wednesday'
]

const reminderEditableFields = [
  'day_of_month',
  'email_address',
  'friday',
  'monday',
  'recur_from',
  'recur_to',
  'remind_at',
  'reminder_medicaions',
  'reminder_supplements',
  'saturday',
  'sunday',
  'thursday',
  'tuesday',
  'txt_number',
  'voice_number',
  'wednesday'
]

function action(reminder) {
  return fieldHelper.getField(reminder, 'action')
}

function addingReminderMedication(reminder) {
  return fieldHelper.getField(reminder, 'addingReminderMedication')
}

function addingReminderSupplement(reminder) {
  return fieldHelper.getField(reminder, 'addingReminderSupplement')
}

function buildChanged(reminder, changedReminder) {
  if (valueHelper.isValue(changedReminder)) {
    return changedReminder
  }

  if (valueHelper.isValue(reminder.id)) {
    return copyIdentifiers(reminder)
  }

  return reminderHelper.buildNewChanged(reminder)

  function copyIdentifiers(reminder) {
    return {
      type: reminder.type,
      id: reminder.id,
      patient_id: reminder.patient_id
    }
  }
}

function buildNewChanged(reminder) {
  return {
    ...reminder
  }
}

function canDelete(user, reminder) {
  return reminderHelper.canEdit(user, reminder)
}

function canEdit(user, reminder) {
  switch (userHelper.role(user)) {
    case 'aprexis_admin':
      return true

    case 'pharmacy_store_admin':
    case 'pharmacy_store_tech':
    case 'pharmacy_store_user':
      return true

    case 'patient_user_role':
      return userHelper.patientId(user) == reminderHelper.patientId(reminder)

    default:
      return false
  }
}

function canModifyField(reminder, fieldName) {
  if (!valueHelper.isValue(reminderHelper.id(reminder))) {
    return true
  }

  return reminderEditableFields.includes(fieldName)
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('reminder', model, changedModel, fieldName, newValue)
}

function dayOfMonth(reminder) {
  return fieldHelper.getField(reminder, 'day_of_month')
}

function displayAction(reminder) {
  const action = reminderHelper.action(reminder)
  if (!valueHelper.isStringValue(action)) {
    return ''
  }

  return reminderActions[action]
}

function displayMedications(reminder) {
  const medications = reminderHelper.medications(reminder)

  return medications.map((medication) => medicationHelper.name(medication)).join(', ')
}

function displayPatientSupplements(reminder) {
  const patientSupplements = reminderHelper.patientSupplements(reminder)

  return patientSupplements.map((patientSupplement) => { return patientSupplementHelper.name(patientSupplement) }).join(', ')
}

function displayRecurFrom(reminder) {
  return dateHelper.displayDate(reminderHelper.recurFrom(reminder))
}

function displayRecurTo(reminder) {
  return dateHelper.displayDate(reminderHelper.recurTo(reminder))
}

function displayRemindAt(reminder) {
  const remindAt = reminderHelper.remindAt(reminder)
  if (!dateHelper.isDateValue(remindAt)) {
    return ''
  }

  let remindAtTimeZone = reminderHelper.patientTimeZone(reminder)
  if (!valueHelper.isStringValue(remindAtTimeZone)) {
    remindAtTimeZone = 'America/New_York'
  } else if (valueHelper.isStringValue(timeZones[remindAtTimeZone])) {
    remindAtTimeZone = timeZones[remindAtTimeZone]
  }

  return formatInTimeZone(dateHelper.makeDate(remindAt), remindAtTimeZone, 'p')
}

function displayType(reminder) {
  const type = reminderHelper.type(reminder)

  return reminderTypes[type]
}

function emailAddress(reminder) {
  return fieldHelper.getField(reminder, 'email_address')
}

function friday(reminder) {
  return fieldHelper.getField(reminder, 'friday')
}

function isReminderActionValue(value) {
  if (!valueHelper.isStringValue(value)) {
    return false
  }

  return valueHelper.isValue(Object.keys(reminderActions).find((reminderAction) => reminderAction == value))
}

function isReminderTypeValue(value) {
  if (!valueHelper.isStringValue(value)) {
    return false
  }

  return valueHelper.isValue(Object.keys(reminderTypes).find((reminderType) => reminderType == value))
}

function medications(reminder) {
  return fieldHelper.getField(reminder, 'medications')
}

function monday(reminder) {
  return fieldHelper.getField(reminder, 'monday')
}

function patient(reminder) {
  return fieldHelper.getField(reminder, 'patient')
}

function patientId(reminder) {
  return idHelper.associatedId(reminder, 'patient', reminderHelper)
}

function patientName(reminder) {
  return patientHelper.name(reminderHelper.patient(reminder))
}

function patientSupplements(reminder) {
  return fieldHelper.getField(reminder, 'patient_supplements')
}

function patientTimeZone(reminder) {
  return patientHelper.timeZone(reminderHelper.patient(reminder))
}

function recurFrom(reminder) {
  return fieldHelper.getField(reminder, 'recur_from')
}

function recurTo(reminder) {
  return fieldHelper.getField(reminder, 'recur_to')
}

function remindAt(reminder) {
  return fieldHelper.getField(reminder, 'remind_at')
}

function reminderMedications(reminder) {
  return fieldHelper.getField(reminder, 'reminder_medications')
}

function reminderSupplements(reminder) {
  return fieldHelper.getField(reminder, 'reminder_supplements')
}

function saturday(reminder) {
  return fieldHelper.getField(reminder, 'saturday')
}

function sunday(reminder) {
  return fieldHelper.getField(reminder, 'sunday')
}

function thursday(reminder) {
  return fieldHelper.getField(reminder, 'thursday')
}

function toJSON(reminder) {
  return apiHelper.toJSON(reminder, reminderKeys)
}

function tuesday(reminder) {
  return fieldHelper.getField(reminder, 'tuesday')
}

function txtNumber(reminder) {
  return fieldHelper.getField(reminder, 'txt_number')
}

function type(reminder) {
  return fieldHelper.getField(reminder, 'type')
}

function voiceNumber(reminder) {
  return fieldHelper.getField(reminder, 'voice_number')
}

function wednesday(reminder) {
  return fieldHelper.getField(reminder, 'wednesday')
}
