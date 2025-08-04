import { valueHelper } from './value.helper.js'
import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { apiHelper } from './api.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'
import { pharmacyStorePatientHelper } from './pharmacy_store_patient.helper.js'

const patientNoteKeys = [
  'id',
  'note',
  'patient_viewable'
]

export const patientNoteHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeField,
  displayDateTime,
  displayPatientViewable,
  note,
  patientName,
  patientViewable,
  pharmacyStoreIdentification,
  pharmacyStorePatient,
  pharmacyStorePatientId,
  pharmacyStoreName,
  pharmacyStoreNumber,
  toJSON,
}

function buildChanged(patientNote, changedPatientNote) {
  if (valueHelper.isValue(changedPatientNote)) {
    return changedPatientNote
  }

  if (valueHelper.isValue(patientNote.id)) {
    return copyIdentifiers(patientNote)
  }

  return patientNoteHelper.buildNewChanged(patientNote)

  function copyIdentifiers(patientNote) {
    return {
      id: patientNote.id,
      pharmacy_store_patient: pharmacyStorePatientHelper.buildChanged(patientNoteHelper.pharmacyStorePatient(patientNote))
    }
  }
}

function buildNewChanged(patientNote) {
  return {
    ...patientNote,
    pharmacy_store_patient: pharmacyStorePatientHelper.buildNewChanged(patientNoteHelper.pharmacyStorePatient(patientNote))
  }
}

function canDelete(_user, _patientNote) {
  return false
}

function canEdit(_user, _patientNote) {
  return false
}


function canModifyField(_patientNote, fieldName) {
  return fieldName != 'id'
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('patientNote', model, changedModel, fieldName, newValue)
}

function displayDateTime(patientNote) {
  const dateTime = updatedAt(patientNote);

  return dateHelper.displayDateTime(dateTime);
}

function displayPatientViewable(patientNote) {
  return valueHelper.yesNo(patientNoteHelper.patientViewable(patientNote))
}

function note(patientNote) {
  return fieldHelper.getField(patientNote, 'note')
}

function patientName(patientNote) {
  return pharmacyStorePatientHelper.patientName(patientNoteHelper.pharmacyStorePatient(patientNote))
}

function patientViewable(patientNote) {
  return fieldHelper.getField(patientNote, 'patient_viewable')
}

function pharmacyStorePatient(patientNote) {
  return fieldHelper.getField(patientNote, 'pharmacy_store_patient')
}

function pharmacyStorePatientId(patientNote) {
  return idHelper.associatedId(patientNote, 'pharmacy_store_patient', patientNoteHelper)
}

function pharmacyStoreIdentification(patientNote) {
  return pharmacyStorePatientHelper.pharmacyStoreIdentification(patientNoteHelper.pharmacyStorePatient(patientNote))
}

function pharmacyStoreName(patientNote) {
  return pharmacyStorePatientHelper.pharmacyStoreName(patientNoteHelper.pharmacyStorePatient(patientNote))
}

function pharmacyStoreNumber(patientNote) {
  return pharmacyStorePatientHelper.pharmacyStoreNumber(patientNoteHelper.pharmacyStorePatient(patientNote))
}

function toJSON(patientNote) {
  const json = apiHelper.toJSON(patientNote, patientNoteKeys)
  const pharmacyStorePatient = patientNoteHelper.pharmacyStorePatient(patientNote)

  if (valueHelper.isValue(pharmacyStorePatient)) {
    json.pharmacy_store_patient_attributes = pharmacyStorePatientHelper.toJSON(pharmacyStorePatient)
  }

  return json
}

function updatedAt(note) {
  return modelDatesHelper.updatedAt(note)
}
