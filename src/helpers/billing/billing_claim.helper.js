import { dateHelper } from '../date.helper'
import { fieldHelper } from '../field.helper'
import { healthPlanHelper } from '../health_plan.helper'
import { interventionHelper } from '../intervention.helper'
import { patientHelper } from '../patient.helper'
import { pharmacyStoreHelper } from '../pharmacy_store.helper'
import { programHelper } from '../program.helper'
import { userHelper } from '../user.helper'
import { valueHelper } from '../value.helper'
import { idHelper } from '../id.helper'
import { modelDatesHelper } from '../model_dates.helper'

export const billingClaimHelper = {
  ...idHelper,
  ...modelDatesHelper,
  amountPaid,
  billingStatus,
  canDelete,
  canEdit,
  claimFacility,
  claimFacilityFullAddress,
  claimFacilityName,
  claimFacilityNpi,
  claimPatient,
  claimPatientDateOfBirth,
  claimPatientFullAddress,
  claimPatientMemberNumber,
  claimPatientName,
  claimPatientPersonNumber,
  claimPatientPhone,
  claimPayer,
  claimPayerName,
  claimPharmacist,
  claimPharmacistName,
  claimProgram,
  claimProgramName,
  claimProvider,
  claimProviderEinNumber,
  claimProviderName,
  claimServices,
  displayAprexisReferenceNumber,
  displayClaimPatientHealthPlanNumber,
  displayPharmacyReferenceNumber,
  displayPayerClaimTrackingNumber,
  displaySubmittedAt,
  healthPlan,
  healthPlanId,
  healthPlanName,
  intervention,
  interventionId,
  interventionIdentification,
  patient,
  patientId,
  patientName,
  payerClaimTrackingNumber,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  referenceNumber,
  statusDescription,
  submittedAt,
  totalCharge
}

function amountPaid(billingClaim) {
  return fieldHelper.getField(billingClaim, 'amount_paid')
}

function billingStatus(billingClaim) {
  return fieldHelper.getField(billingClaim, 'billing_status')
}

function canDelete(_user, _billingClaim) {
  return false
}

function canEdit(_user, _billingClaim) {
  return false
}

function claimFacility(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_facility')
}

function claimFacilityFullAddress(billingClaim) {
  return pharmacyStoreHelper.fullAddress(billingClaimHelper.claimFacility(billingClaim))
}

function claimFacilityName(billingClaim) {
  return pharmacyStoreHelper.name(billingClaimHelper.claimFacility(billingClaim))
}

function claimFacilityNpi(billingClaim) {
  return pharmacyStoreHelper.npi(billingClaimHelper.claimFacility(billingClaim))
}

function claimPatient(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_patient')
}

function claimPatientDateOfBirth(billingClaim) {
  return patientHelper.dateOfBirth(billingClaimHelper.claimPatient(billingClaim))
}

function claimPatientFullAddress(billingClaim) {
  return patientHelper.fullAddress(billingClaimHelper.claimPatient(billingClaim))
}

function claimPatientMemberNumber(billingClaim) {
  return patientHelper.memberNumber(billingClaimHelper.claimPatient(billingClaim))
}

function claimPatientName(billingClaim) {
  return patientHelper.name(billingClaimHelper.claimPatient(billingClaim))
}

function claimPatientPersonNumber(billingClaim) {
  return patientHelper.personNumber(billingClaimHelper.claimPatient(billingClaim))
}

function claimPatientPhone(billingClaim) {
  return patientHelper.phone(billingClaimHelper.claimPatient(billingClaim))
}

function claimPayer(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_payer')
}

function claimPayerName(billingClaim) {
  return healthPlanHelper.name(billingClaimHelper.claimPayer(billingClaim))
}

function claimPharmacist(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_pharmacist')
}

function claimPharmacistName(billingClaim) {
  return userHelper.fullName(billingClaimHelper.claimPharmacist(billingClaim))
}

function claimProgram(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_program')
}

function claimProgramName(billingClaim) {
  return programHelper.name(billingClaimHelper.claimProgram(billingClaim))
}

function claimProvider(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_provider')
}

function claimProviderEinNumber(billingClaim) {
  return pharmacyStoreHelper.einNumber(billingClaimHelper.claimProvider(billingClaim))
}

function claimProviderName(billingClaim) {
  return pharmacyStoreHelper.name(billingClaimHelper.claimProvider(billingClaim))
}

function claimServices(billingClaim) {
  return fieldHelper.getField(billingClaim, 'claim_services')
}

function displayAprexisReferenceNumber(billingClaim) {
  const referenceNumber = billingClaimHelper.referenceNumber(billingClaim)
  if (!valueHelper.isStringValue(referenceNumber)) {
    return 'Not available'
  }

  const dash = referenceNumber.lastIndexOf('-')
  if (dash === -1) {
    return referenceNumber
  }

  return referenceNumber.substring(dash + 1)
}

function displayClaimPatientHealthPlanNumber(billingClaim) {
  const memberNumber = billingClaimHelper.claimPatientMemberNumber(billingClaim)
  const personNumber = billingClaimHelper.claimPatientPersonNumber(billingClaim)

  if (!valueHelper.isStringValue(personNumber)) {
    return memberNumber
  }

  return `${memberNumber}-${personNumber}`
}

function displayPayerClaimTrackingNumber(billingClaim) {
  const payerNumber = billingClaimHelper.payerClaimTrackingNumber(billingClaim)
  if (!valueHelper.isStringValue(payerNumber)) {
    return 'Not available'
  }

  return payerNumber
}

function displayPharmacyReferenceNumber(billingClaim) {
  const referenceNumber = billingClaimHelper.referenceNumber(billingClaim)
  if (!valueHelper.isStringValue(referenceNumber)) {
    return 'Not available'
  }

  const dash = referenceNumber.lastIndexOf('-')
  if (dash === -1) {
    return 'Not available'
  }

  return referenceNumber.substring(0, dash - 1)
}

function displaySubmittedAt(billingClaim) {
  return dateHelper.displayDateTime(billingClaimHelper.submittedAt(billingClaim))
}

function healthPlan(billingClaim) {
  return fieldHelper.getField(billingClaim, 'health_plan')
}

function healthPlanId(billingClaim) {
  return idHelper.associatedId(billingClaim, 'health_plan', billingClaimHelper)
}

function healthPlanName(billingClaim) {
  return healthPlanHelper.name(billingClaimHelper.healthPlan(billingClaim))
}

function intervention(billingClaim) {
  return fieldHelper.getField(billingClaim, 'intervention')
}

function interventionId(billingClaim) {
  return idHelper.associatedId(billingClaim, 'intervention', billingClaimHelper)
}

function interventionIdentification(billingClaim) {
  return interventionHelper.identification(billingClaimHelper.intervention(billingClaim))
}

function patient(billingClaim) {
  return fieldHelper.getField(billingClaim, 'patient')
}

function patientId(billingClaim) {
  return idHelper.associatedId(billingClaim, 'patient', billingClaimHelper)
}

function patientName(billingClaim) {
  return patientHelper.name(billingClaimHelper.patient(billingClaim))
}

function payerClaimTrackingNumber(billingClaim) {
  return fieldHelper.getField(billingClaim, 'payer_claim_tracking_number')
}

function pharmacyStore(billingClaim) {
  return fieldHelper.getField(billingClaim, 'pharmacy_store')
}

function pharmacyStoreId(billingClaim) {
  return idHelper.associatedId(billingClaim, 'pharmacy_store', billingClaimHelper)
}

function pharmacyStoreIdentification(billingClaim) {
  return pharmacyStoreHelper.identification(billingClaimHelper.pharmacyStore(billingClaim), true)
}

function referenceNumber(billingClaim) {
  return fieldHelper.getField(billingClaim, 'reference_number')
}

function statusDescription(billingClaim) {
  return fieldHelper.getField(billingClaim, 'status_description')
}

function submittedAt(billingClaim) {
  return fieldHelper.getField(billingClaim, 'submitted_at')
}

function totalCharge(billingClaim) {
  return fieldHelper.getField(billingClaim, 'total_charge')
}
