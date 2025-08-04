import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { patientHelper } from './patient.helper.js'
import { valueHelper } from './value.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const patientHealthPlanInsuranceDetailHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  displayType,
  hasCommercialInsurance,
  hasMedicare,
  patient,
  patientId,
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

function patientId(patientHealthPlanInsuranceDetail) {
  return idHelper.associatedId(patientHealthPlanInsuranceDetail, 'patient', patientHealthPlanInsuranceDetailHelper)
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
