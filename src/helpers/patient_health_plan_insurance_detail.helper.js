import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { patientHelper } from './patient.helper'
import { valueHelper } from './value.helper'

export const patientHealthPlanInsuranceDetailHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  displayType,
  hasCommercialInsurance,
  hasMedicare,
  patient,
  patientName,
  planName,
  primaryInsuranceType,
  type
}

function canDelete(_user, _patientHealthPlanInsuranceDetail) {
  return false
}

function canEdit(_user, _patientHealthPlanInsuranceDetail) {
  return false
}

function displayType(patientHealthPlanInsuranceDetail) {
  return valueHelper.titleize(patientHealthPlanInsuranceDetailHelper.type(patientHealthPlanInsuranceDetail))
}

function hasCommercialInsurance(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'has_commercial_insurance')
}

function hasMedicare(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'has_medicate')
}

function patient(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'patient')
}

function patientName(patientHealthPlanInsuranceDetail) {
  return patientHelper.name(patientHealthPlanInsuranceDetailHelper.patient(patientHealthPlanInsuranceDetail))
}

function planName(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'plan_name')
}

function primaryInsuranceType(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'primary_insurance_type')
}

function type(patientHealthPlanInsuranceDetail) {
  return fieldHelper.getField(patientHealthPlanInsuranceDetail, 'type')
}