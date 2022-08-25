import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { apiHelper } from './api.helper'
import { caregiverHelper } from './caregiver.helper'
import { dateHelper } from './date.helper'
import { healthPlanHelper } from './health_plan.helper'
import { idHelper } from './id.helper'
import { patientHelper } from './patient.helper'
import { pharmacyStoreHelper } from './pharmacy_store.helper'
import { programHelper } from './program.helper'
import { userHelper } from './user.helper'
import { diagnosisCodeHelper, placeOfServiceHelper } from './admin'

export const interventionHelper = {
  ...idHelper,
  billLater,
  buildChanged,
  buildNewChanged,
  canDelete,
  canEdit,
  canModifyField,
  changeDiagnosisCode,
  changeField,
  closedReason,
  closedReasonDetail,
  consentFormInitiatedAt,
  consentFormInitiator,
  consentFormOnFile,
  consentObtainedFrom,
  consentVia,
  consultEnded,
  consultSessionDuration,
  consultSessionDurationExact,
  consultSessionDurationFaceToFace,
  consultStarted,
  contactAttempts,
  dateOfService,
  diagnosisCode,
  diagnosisCodeId,
  diagnosisCodeLongDescription,
  displayConsentFormInitiatedAt,
  displayConsentObtainedFrom,
  displayConsultEnded,
  displayConsultStarted,
  displayDateOfServce,
  displayPendingUntil,
  displayUserEnded,
  displayUserStarted,
  dryRunProgramPatientAssignmentId,
  faxBypassed,
  healthPlanName,
  identification,
  medicarePaymentAmount,
  medicarePaymentStatus,
  memberNumber,
  newPatient,
  patient,
  patientName,
  pendingUntil,
  personNumber,
  pharmacist,
  pharmacistAgreedToSubmitClaimAt,
  pharmacistDisplay,
  pharmacyClaimTrackingNumber,
  pharmacyStore,
  pharmacyStoreDisplay,
  physiciansResponse,
  physiciansResponseRecordedAt,
  placeOfService,
  program,
  programDisplay,
  programName,
  programType,
  providerFee,
  serviceLocation,
  state,
  userEnded,
  userName,
  userStarted,
  toJSON,
  venue
}

const interventionKeys = [
  'id',
  'consent_obtained_from_id',
  'contract_term_id',
  'diagnosis_code_type',
  'diagnosis_code_id',
  'dry_run_program_patient_assignment_id',
  'patient_id',
  'health_plan_id',
  'pharmacist_id',
  'pharmacy_store_id',
  'program_id',
  'recommending_intervention_id',
  'user_id',
  'bill_later',
  'closed_reason',
  'closed_reason_detail',
  'commercial_insurance_payment_amount',
  'commercial_insurance_payment_status',
  'consent_form_initiated_at',
  'consent_form_initiated_by',
  'consent_form_on_file',
  'consent_obtained_from_type',
  'consent_via',
  'consult_end_date',
  'consult_session_duration',
  'consult_session_duration_exact',
  'consult_session_duration_face_to_face',
  'consult_start_date',
  'contact_attempts',
  'date_of_service',
  'fax_bypassed',
  'medicare_payment_amount',
  'medicare_payment_status',
  'meta',
  'new_patient',
  'pending_until',
  'pharmacist_agreed_to_submit_claim_at',
  'pharmacy_claim_tracking_number',
  'pharmacy_store_assignments',
  'physicians_response',
  'physicians_response_recorded_at',
  'place_of_service',
  'provider_fee',
  'recipient',
  'state',
  'state_path',
  'user_end_date',
  'user_start_date',
  'venue'
]

const interventionFixedFields = [
  'id',
  'health_plan_id',
  'patient_id',
  'user_id',
  'recommending_intervention_id',
  'meta',
  'state',
  'state_path'
]

const interventionEditableFields = interventionKeys.filter((fieldName) => !interventionFixedFields.includes(fieldName))

function billLater(intervention) {
  return fieldHelper.getField(intervention, 'bill_later')
}

function buildChanged(intervention, changedIntervention) {
  if (valueHelper.isValue(changedIntervention)) {
    return changedIntervention
  }

  if (valueHelper.isValue(intervention.id)) {
    return copyIdentifiers(intervention)
  }

  return interventionHelper.buildNewChanged(intervention)

  function copyIdentifiers(intervention) {
    return {
      id: intervention.id,
      diagnosis_code_id: intervention.diagnosis_code_id,
      health_plan_id: intervention.health_plan_id,
      patient_id: intervention.patient_id,
      pharmacist_id: intervention.pharmacist_id,
      pharmacy_store_id: intervention.pharmacy_store_id,
      place_of_service: intervention.place_of_service,
      recommending_intervention_id: intervention.recommending_intervention_id,
      user_id: intervention.user_id
    }
  }
}

function buildNewChanged(intervention) {
  return {
    ...intervention
  }
}

function canDelete(_user, _intervention) {
  return false
}

function canEdit(_user, _intervention) {
  return false
}

function canModifyField(currentUser, intervention, fieldName) {
  if (valueHelper.isValue(interventionHelper.id(intervention)) && !userHelper.hasRole(currentUser, 'aprexis_admin') && !interventionEditableFields.includes(fieldName)) {
    return false
  }

  return !valueHelper.isValue(interventionHelper.id(intervention)) || userHelper.hasRole(currentUser, 'aprexis_admin')
}

function changeDiagnosisCode(modelName, model, changedModel, diagnosisCode) {
  const diagnosisCodeType = diagnosisCodeHelper.type(diagnosisCode)
  const diagnosisCodeId = diagnosisCodeHelper.id(diagnosisCode)

  let updated = fieldHelper.changeValue(
    modelName,
    model,
    changedModel,
    'diagnosis_code_type',
    diagnosisCodeType
  )
  updated = fieldHelper.changeValue(
    modelName,
    updated[modelName],
    updated[valueHelper.changedModelName(modelName)],
    'diagnosis_code_id',
    diagnosisCodeId
  )
  updated = fieldHelper.changeValue(
    modelName,
    updated[modelName],
    updated[valueHelper.changedModelName(modelName)],
    'diagnosis_code',
    diagnosisCode
  )

  return updated
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('intervention', model, changedModel, fieldName, newValue)
}

function closedReason(intervention) {
  return fieldHelper.getField(intervention, 'closed_reason')
}

function closedReasonDetail(intervention) {
  return fieldHelper.getField(intervention, 'closed_reason_detail')
}

function consentFormInitiatedAt(intervention) {
  return fieldHelper.getField(intervention, 'consent_form_initiated_at')
}

function consentFormInitiator(intervention) {
  return userHelper.fullName(fieldHelper.getField(intervention, 'consent_form_initiator'))
}

function consentFormOnFile(intervention) {
  return fieldHelper.getField(intervention, 'consent_form_on_file')
}

function consentObtainedFrom(intervention) {
  return fieldHelper.getField(intervention, 'consent_obtained_from')
}

function consentVia(intervention) {
  return fieldHelper.getField(intervention, 'consent_via')
}

function consultEnded(intervention) {
  return fieldHelper.getField(intervention, 'consult_end_date')
}

function consultSessionDuration(intervention) {
  return fieldHelper.getField(intervention, 'consult_session_duration')
}

function consultSessionDurationExact(intervention) {
  return fieldHelper.getField(intervention, 'consult_session_duration_exact')
}

function consultSessionDurationFaceToFace(intervention) {
  return fieldHelper.getField(intervention, 'consult_session_duration_face_to_face')
}

function consultStarted(intervention) {
  return fieldHelper.getField(intervention, 'consult_start_date')
}

function contactAttempts(intervention) {
  return fieldHelper.getField(intervention, 'contact_attempts')
}

function dateOfService(intervention) {
  return fieldHelper.getField(intervention, 'date_of_service')
}

function diagnosisCode(intervention) {
  return diagnosisCodeHelper.code(fieldHelper.getField(intervention, 'diagnosis_code'))
}

function diagnosisCodeId(intervention) {
  return fieldHelper.getField(intervention, 'diagnosis_code_id')
}

function diagnosisCodeLongDescription(intervention) {
  return diagnosisCodeHelper.longDescription(fieldHelper.getField(intervention, 'diagnosis_code'))
}


function displayConsentFormInitiatedAt(intervention) {
  return dateHelper.displayDateTime(interventionHelper.consentFormInitiatedAt(intervention))
}

function displayConsentObtainedFrom(intervention) {
  const consenter = interventionHelper.consentObtainedFrom(intervention)
  if (!valueHelper.isValue(consenter)) {
    return 'Not Obtained'
  }
  if (consenter.relationship == 'Patient') {
    return 'Patient'
  }

  return caregiverHelper.displayCaregiverAndRelationship(consenter)
}

function displayConsultEnded(intervention) {
  return dateHelper.displayDate(interventionHelper.consultEnded(intervention))
}

function displayConsultStarted(intervention) {
  return dateHelper.displayDate(interventionHelper.consultStarted(intervention))
}

function displayDateOfServce(intervention) {
  return dateHelper.displayDate(interventionHelper.dateOfService(intervention))
}

function displayPendingUntil(intervention) {
  return dateHelper.displayDate(interventionHelper.pendingUntil(intervention))
}

function displayUserEnded(intervention) {
  return dateHelper.displayDateTime(interventionHelper.userEnded(intervention))
}

function displayUserStarted(intervention) {
  return dateHelper.displayDateTime(interventionHelper.userStarted(intervention))
}


function dryRunProgramPatientAssignmentId(intervention) {
  return fieldHelper.getField(intervention, 'dry_run_program_patient_id')
}

function faxBypassed(intervention) {
  return fieldHelper.getField(intervention, 'fax_bypassed')
}

function healthPlanName(intervention) {
  return healthPlanHelper.name(fieldHelper.getField(intervention, 'health_plan'))
}

function identification(intervention) {
  return `${interventionHelper.programName(intervention)} ${interventionHelper.dateOfService(intervention)}`
}

function medicarePaymentAmount(intervention) {
  return fieldHelper.getField(intervention, 'medicare_payment_amount')
}

function medicarePaymentStatus(intervention) {
  return fieldHelper.getField(intervention, 'medicare_payment_status')
}

function memberNumber(intervention) {
  return patientHelper.memberNumber(interventionHelper.patient(intervention))
}

function newPatient(intervention) {
  return fieldHelper.getField(intervention, 'new_patient')
}

function patient(intervention) {
  return fieldHelper.getField(intervention, 'patient')
}

function patientName(intervention, prefix = '', allowBlank = false) {
  return patientHelper.name(interventionHelper.patient(intervention), prefix, allowBlank)
}

function pendingUntil(intervention) {
  return fieldHelper.getField(intervention, 'pending_until')
}

function personNumber(intervention) {
  return patientHelper.personNumber(interventionHelper.patient(intervention))
}

function pharmacist(intervention) {
  return fieldHelper.getField(intervention, 'pharmacist')
}

function pharmacistAgreedToSubmitClaimAt(intervention) {
  return fieldHelper.getField(intervention, 'pharmacist_agreed_to_submit_claim_at')
}

function pharmacistDisplay(intervention) {
  return userHelper.pharmacistDisplay(interventionHelper.pharmacist(intervention))
}

function pharmacyClaimTrackingNumber(intervention) {
  return fieldHelper.getField(intervention, 'pharmacy_claim_tracking_number')
}

function pharmacyStore(intervention) {
  return fieldHelper.getField(intervention, 'pharmacy_store')
}

function pharmacyStoreDisplay(intervention) {
  return pharmacyStoreHelper.display(interventionHelper.pharmacyStore(intervention))
}

function physiciansResponse(intervention) {
  return fieldHelper.getField(intervention, 'physicians_response')
}

function physiciansResponseRecordedAt(intervention) {
  return fieldHelper.getField(intervention, 'physicians_response_recorded_at')
}

function placeOfService(intervention) {
  return fieldHelper.getField(intervention, 'place_of_service')
}

function program(intervention) {
  return fieldHelper.getField(intervention, 'program')
}

function programDisplay(intervention) {
  return programHelper.display(interventionHelper.program(intervention))
}

function programName(intervention) {
  return programHelper.name(interventionHelper.program(intervention))
}

function programType(intervention) {
  return programHelper.type(interventionHelper.program(intervention))
}

function providerFee(intervention) {
  return fieldHelper.getField(intervention, 'provider_fee')
}

function serviceLocation(intervention) {
  return placeOfServiceHelper.name(fieldHelper.getField(intervention, 'service_location'))
}

function state(intervention) {
  return valueHelper.titleize(fieldHelper.getField(intervention, 'state'))
}

function userEnded(intervention) {
  return fieldHelper.getField(intervention, 'user_end_date')
}

function userName(intervention) {
  return userHelper.fullName(fieldHelper.getField(intervention, 'user'))
}

function userStarted(intervention) {
  return fieldHelper.getField(intervention, 'user_start_date')
}

function toJSON(intervention) {
  return apiHelper.toJSON(intervention, interventionKeys)
}

function venue(intervention) {
  return fieldHelper.getField(intervention, 'venue')
}
