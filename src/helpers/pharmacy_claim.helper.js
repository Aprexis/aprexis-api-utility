import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { patientHelper } from './patient.helper.js'
import { pharmacyStoreHelper } from './pharmacy_store.helper.js'
import { medicationHelper, nadacHelper, physicianHelper } from './admin/index.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const pharmacyClaimHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  claimNumber,
  daysSupply,
  dose,
  doseUnits,
  drugClass,
  drugName,
  fillDate,
  frequency,
  frequencyUnits,
  healthPlanPatientPharmacyClaimIdentifier,
  medication,
  medicationId,
  medicationLabel,
  memberNumber,
  nadac,
  nadacId,
  nadacUnitPrice,
  ndc,
  patient,
  patientId,
  patientName,
  personNumber,
  pharmacyNpi,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  physician,
  physicianId,
  physicianName,
  physicianNpi,
  prescriptionNumber,
  processedDate,
  quantity,
  strength,
  strengthUnits,
  uploadId,
  uploadType,
  wasUploaded
}

function canDelete(_user, _pharmacyClaim) {
  return false
}

function canEdit(_user, _pharmacyClaim) {
  return false
}

function claimNumber(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'claim_number')
}

function daysSupply(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'days_supply')
}

function dose(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'dose')
}

function doseUnits(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'dose_units')
}

function drugClass(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'drug_class')
}

function drugName(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'drug_name')
}

function fillDate(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'fill_date')
}

function frequency(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'frequency')
}

function frequencyUnits(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'frequency_units')
}

function healthPlanPatientPharmacyClaimIdentifier(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'health_plan_patient_pharmacy_claim_identifier')
}

function medication(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'medication')
}

function medicationId(pharmacyClaim) {
  return idHelper.associatedId(pharmacyClaim, 'medication', pharmacyClaimHelper)
}

function medicationLabel(pharmacyClaim) {
  return medicationHelper.label(pharmacyClaimHelper.medication(pharmacyClaim))
}

function memberNumber(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'member_number')
}

function nadac(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'nadac')
}

function nadacId(pharmacyClaim) {
  return idHelper.associatedId(pharmacyClaim, 'nadac', pharmacyClaimHelper)
}

function nadacUnitPrice(pharmacyClaim) {
  return nadacHelper.unitPrice(pharmacyClaimHelper.nadac(pharmacyClaim))
}

function ndc(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'ndc')
}

function patient(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'patient')
}

function patientId(pharmacyClaim) {
  return idHelper.associatedId(pharmacyClaim, 'patient', pharmacyClaimHelper)
}

function patientName(pharmacyClaim) {
  return patientHelper.name(pharmacyClaimHelper.patient(pharmacyClaim))
}

function personNumber(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'person_number')
}

function pharmacyNpi(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'pharmacy_npi')
}

function pharmacyStore(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'pharmacy_store')
}

function pharmacyStoreId(pharmacyClaim) {
  return idHelper.associatedId(pharmacyClaim, 'pharmacy_store', pharmacyClaimHelper)
}

function pharmacyStoreIdentification(pharmacyClaim) {
  return pharmacyStoreHelper.identification(pharmacyClaimHelper.pharmacyStore(pharmacyClaim))
}

function physician(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'physician')
}

function physicianId(pharmacyClaim) {
  return idHelper.associatedId(pharmacyClaim, 'physician', pharmacyClaimHelper)
}

function physicianName(pharmacyClaim) {
  return physicianHelper.name(pharmacyClaimHelper.physician(pharmacyClaim))
}

function physicianNpi(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'physician_npi')
}

function prescriptionNumber(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'prescription_number')
}

function processedDate(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'processed_date')
}

function quantity(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'quantity')
}

function strength(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'strength')
}

function strengthUnits(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'strength_units')
}

function uploadId(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'upload_id')
}

function uploadType(pharmacyClaim) {
  return fieldHelper.getField(pharmacyClaim, 'upload_type')
}

function wasUploaded(pharmacyClaim) {
  return valueHelper.isStringValue(pharmacyClaimHelper.uploadType(pharmacyClaim)) &&
    valueHelper.isValue(pharmacyClaimHelper.uploadId(pharmacyClaim))
}
