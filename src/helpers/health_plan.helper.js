import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { addressHelper } from './address.helper'
import { contactHelper } from './contact.helper'
import { userHelper } from './user.helper'
import { idHelper } from './id.helper'
import { modelConfigsHelper } from './model_configs.helper'
import { modelDatesHelper } from './model_dates.helper'

export const healthPlanHelper = {
  ...idHelper,
  ...valueHelper.filterHash(addressHelper, { excludeKeys: ['keys'] }),
  ...valueHelper.filterHash(contactHelper, { excludeKeys: ['keys'] }),
  ...modelConfigsHelper,
  ...modelDatesHelper,
  active,
  activePatients,
  allowManuallyAddedPatients,
  billingClaimsGateway,
  canConfigure,
  canDelete,
  canEdit,
  canIndex,
  ccdGenerator,
  code,
  currentlyImportingData,
  enableReminders,
  generateCompletedInterventionsReport,
  importingPatientData,
  insuranceDetailType,
  isSegmented,
  name,
  notes,
  pharmacyClaimsUploader,
  requiresExplicitAuthorization,
  requiresPersonNumber,
  saveClaimSubmissionFiles,
  segmentedUploader,
  showPharmacyClaims,
  twoSeventySixMode,
  zirmedPayerNameMatching
}

function active(healthPlan) {
  return fieldHelper.getField(healthPlan, 'active')
}

function activePatients(healthPlan) {
  return fieldHelper.getField(healthPlan, 'active_patients')
}

function allowManuallyAddedPatients(healthPlan) {
  return fieldHelper.getField(healthPlan, 'allow_manually_added_patients')
}

function billingClaimsGateway(healthPlan) {
  return fieldHelper.getField(healthPlan, 'billing_claims_gateway')
}

function canConfigure(user) {
  return userHelper.hasRole(user, 'aprexis_admin')
}

function canDelete(_user, _healthPlan) {
  return false
}

function canEdit(_user, _healthPlan) {
  return false
}

function canIndex(user) {
  return valueHelper.isValue(user)
}

function ccdGenerator(healthPlan) {
  return fieldHelper.getField(healthPlan, 'ccd_generator')
}

function code(healthPlan) {
  return fieldHelper.getField(healthPlan, 'code')
}

function currentlyImportingData(healthPlan) {
  return fieldHelper.getField(healthPlan, 'currently_importing_data')
}

function enableReminders(healthPlan) {
  return fieldHelper.getField(healthPlan, 'enable_reminders')
}

function generateCompletedInterventionsReport(healthPlan) {
  return fieldHelper.getField(healthPlan, 'generated_completed_interventions_report')
}

function importingPatientData(healthPlan) {
  return fieldHelper.getField(healthPlan, 'importing_patient_data')
}

function insuranceDetailType(healthPlan) {
  return fieldHelper.getField(healthPlan, 'insurance_detail_type')
}

function isSegmented(healthPlan) {
  return valueHelper.isStringValue(healthPlanHelper.segmentedUploader(healthPlan))
}

function name(healthPlan) {
  return fieldHelper.getField(healthPlan, 'name')
}

function notes(healthPlan) {
  return fieldHelper.getField(healthPlan, 'notes')
}

function pharmacyClaimsUploader(healthPlan) {
  return fieldHelper.getField(healthPlan, 'pharmacy_claims_uploader')
}

function requiresExplicitAuthorization(healthPlan) {
  return fieldHelper.getField(healthPlan, 'requires_explicit_authorization')
}

function requiresPersonNumber(healthPlan) {
  return fieldHelper.getField(healthPlan, 'requires_person_number')
}

function saveClaimSubmissionFiles(healthPlan) {
  return fieldHelper.getField(healthPlan, 'save_claim_submission_files')
}

function segmentedUploader(healthPlan) {
  return fieldHelper.getField(healthPlan, 'segmented_uploader')
}

function showPharmacyClaims(healthPlan) {
  return fieldHelper.getField(healthPlan, 'show_pharmacy_claims')
}

function twoSeventySixMode(healthPlan) {
  return fieldHelper.getField(healthPlan, 'two_seventy_six_mode')
}

function zirmedPayerNameMatching(healthPlan) {
  return fieldHelper.getField(healthPlan, 'zirmed_payer_name_matching')
}
