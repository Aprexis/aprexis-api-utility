import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { apiHelper } from './api.helper'
import { patientHelper } from './patient.helper'
import { pharmacyStoreHelper } from './pharmacy_store.helper'
import { idHelper } from './id.helper'
import { modelDatesHelper } from './model_dates.helper'

const pharmacyStorePatientKeys = [
  'id',
  'patient_id',
  'pharmacy_store_id'
]

export const pharmacyStorePatientHelper = {
  ...idHelper,
  ...modelDatesHelper,
  buildChanged,
  buildNewChanged,
  changeField,
  patient,
  patientId,
  patientName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  pharmacyStoreName,
  pharmacyStoreNumber,
  toJSON
}

function buildChanged(pharmacyStorePatient, changedPharmacyStorePatient) {
  if (valueHelper.isValue(changedPharmacyStorePatient)) {
    return changedPharmacyStorePatient
  }

  return pharmacyStorePatientHelper.buildNewChanged(pharmacyStorePatient)
}

function buildNewChanged(pharmacyStorePatient) {
  return {
    id: pharmacyStorePatient.id,
    patient_id: pharmacyStorePatient.patient_id,
    pharmacy_store_id: pharmacyStorePatient.pharmacy_store_id
  }
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('pharmacyStorePatient', model, changedModel, fieldName, newValue)
}

function patient(pharmacyStorePatient) {
  return fieldHelper.getField(pharmacyStorePatient, 'patient')
}

function patientId(pharmacyStorePatient) {
  return idHelper.associatedId(pharmacyStorePatient, 'patient', pharmacyStorePatientHelper)
}

function patientName(pharmacyStorePatient) {
  return patientHelper.name(pharmacyStorePatientHelper.patient(pharmacyStorePatient))
}

function pharmacyStore(pharmacyStorePatient) {
  return fieldHelper.getField(pharmacyStorePatient, 'pharmacy_store')
}

function pharmacyStoreIdentification(pharmacyStorePatient) {
  return pharmacyStoreHelper.identification(pharmacyStorePatientHelper.pharmacyStore(pharmacyStorePatient))
}

function pharmacyStoreId(pharmacyStorePatient) {
  return idHelper.associatedId(pharmacyStorePatient, 'pharmacy_store', pharmacyStorePatientHelper)
}

function pharmacyStoreName(pharmacyStorePatient) {
  return pharmacyStoreHelper.name(pharmacyStorePatientHelper.pharmacyStore(pharmacyStorePatient))
}

function pharmacyStoreNumber(pharmacyStorePatient) {
  return pharmacyStoreHelper.storeNumber(pharmacyStorePatientHelper.pharmacyStore(pharmacyStorePatient))
}

function toJSON(pharmacyStorePatient) {
  return apiHelper.toJSON(pharmacyStorePatient, pharmacyStorePatientKeys)
}
