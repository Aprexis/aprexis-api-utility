import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { healthPlanHelper } from './health_plan.helper.js'
import { patientHelper } from './patient.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const medicalClaimHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  claimNumber,
  healthPlan,
  healthPlanId,
  healthPlanName,
  healthPlanPatientMedicalClaimIdentifier,
  medicalClaimDiagnosisCodes,
  memberNumber,
  patient,
  patientId,
  patientName,
  personNumber,
  processedDate,
  providerNpi,
  serviceDate,
  uploadId,
  uploadType,
  wasUploaded
}


function canDelete(_user, _medicalClaim) {
  return false
}

function canEdit(_user, _medicalClaim) {
  return false
}

function claimNumber(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'claim_number')
}

function healthPlan(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'health_plan')
}

function healthPlanId(medicalClaim) {
  return idHelper.associatedId(medicalClaim, 'health_plan', medicalClaimHelper)
}

function healthPlanName(medicalClaim) {
  return healthPlanHelper.name(medicalClaimHelper.healthPlan(medicalClaim))
}

function healthPlanPatientMedicalClaimIdentifier(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'health_plan_patient_medical_claim_identifier')
}

function medicalClaimDiagnosisCodes(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'medical_claim_diagnosis_codes')
}

function memberNumber(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'member_number')
}

function patient(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'patient')
}

function patientId(medicalClaim) {
  return idHelper.associatedId(medicalClaim, 'patient', medicalClaimHelper)
}

function patientName(medicalClaim) {
  return patientHelper.name(medicalClaimHelper.patient(medicalClaim))
}

function personNumber(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'person_number')
}

function processedDate(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'processed_date')
}

function providerNpi(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'provider_npi')
}

function serviceDate(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'service_date')
}

function uploadId(medicalClaim) {
  return idHelper.associatedId(medicalClaim, 'upload', medicalClaimHelper)
}

function uploadType(medicalClaim) {
  return fieldHelper.getField(medicalClaim, 'upload_type')
}

function wasUploaded(pharmacyClaim) {
  return valueHelper.isStringValue(medicalClaimHelper.uploadType(pharmacyClaim)) &&
    valueHelper.isValue(medicalClaimHelper.uploadId(pharmacyClaim))
}
