import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'
import { pharmacyStoreHelper } from './pharmacy_store.helper.js'
import { programHelper } from './program.helper.js'

export const pharmacyStoreProgramReportHelper = {
  ...idHelper,
  ...modelDatesHelper,
  activeInterventions,
  ageAverage,
  ageMax,
  ageMin,
  averageFollowUpsPerMember,
  averageRecommendationsPerMember,
  averagePatientSatisfaction,
  canDelete,
  canEdit,
  completedInterventions,
  consultsScheduled,
  deviceInstructionsGiven,
  femalesCount,
  healthPlanId,
  healthPlanName,
  immunizationsGiven,
  inactiveInterventions,
  malesCount,
  patientCount,
  patientSatisfactionScore,
  pharmacyChainId,
  pharmacyChainName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  pharmacyStoreName,
  pharmacyStoreStoreNumber,
  program,
  programId,
  programName,
  programType,
  rxChangesApproved,
  rxChangesApprovedWithModification,
  rxChangesRejected,
  rxFollowUpsMade,
  rxRecommendationsMade,
  satisfactionPatientCount,
  type
}

function activeInterventions(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "active_interventions")
}

function ageAverage(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "age_average")
}

function ageMax(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "age_max")
}

function ageMin(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "age_min")
}

function averageFollowUpsPerMember(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "average_follow_ups_per_member")
}

function averageRecommendationsPerMember(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "average_recommendations_per_member")
}

function averagePatientSatisfaction(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "average_patient_satisfaction")
}

function canDelete(_user, _pharmacyStoreProgramReport) {
  return false
}

function canEdit(_user, _pharmacyStoreProgramReport) {
  return false
}

function completedInterventions(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "completed_interventions")
}

function consultsScheduled(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "consults_scheduled")
}

function deviceInstructionsGiven(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "device_instructions_given")
}

function femalesCount(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "females_count")
}

function healthPlanId(pharmacyStoreProgramReport) {
  return programHelper.healthPlanId(pharmacyStoreProgramReportHelper.program(pharmacyStoreProgramReport))
}

function healthPlanName(pharmacyStoreProgramReport) {
  return programHelper.healthPlanName(pharmacyStoreProgramReportHelper.program(pharmacyStoreProgramReport))
}

function immunizationsGiven(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "immunizations_given")
}

function inactiveInterventions(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "inactive_interventions")
}

function malesCount(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "males_count")
}

function patientCount(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "patient_count")
}

function patientSatisfactionScore(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "patient_satisfaction_score")
}

function pharmacyChainId(pharmacyStoreProgramReport) {
  return pharmacyStoreHelper.pharmacyChainId(pharmacyStoreProgramReportHelper.pharmacyStore(pharmacyStoreProgramReport))
}

function pharmacyChainName(pharmacyStoreProgramReport) {
  return pharmacyStoreHelper.pharmacyChainName(pharmacyStoreProgramReportHelper.pharmacyStore(pharmacyStoreProgramReport))
}

function pharmacyStore(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "pharmacy_store")
}

function pharmacyStoreId(pharmacyStoreProgramReport) {
  return idHelper.associatedId(pharmacyStoreProgramReport, "pharmacy_store", pharmacyStoreProgramReportHelper)
}

function pharmacyStoreIdentification(pharmacyStoreProgramReport) {
  return pharmacyStoreHelper.identification(pharmacyStoreProgramReportHelper.pharmacyStore(pharmacyStoreProgramReport))
}

function pharmacyStoreName(pharmacyStoreProgramReport) {
  return pharmacyStoreHelper.name(pharmacyStoreProgramReportHelper.pharmacyStore(pharmacyStoreProgramReport))
}

function pharmacyStoreStoreNumber(pharmacyStoreProgramReport) {
  return pharmacyStoreHelper.storeNumber(pharmacyStoreProgramReportHelper.pharmacyStore(pharmacyStoreProgramReport))
}

function program(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "program")
}

function programId(pharmacyStoreProgramReport) {
  return idHelper.associatedId(pharmacyStoreProgramReport, "program", pahramcyStoreProgramReportHelper)
}

function programName(pharmacyStoreProgramReport) {
  return programHelper.name(pharmacyStoreProgramReportHelper.program(pharmacyStoreProgramReport))
}

function programType(pharmacyStoreProgramReport) {
  return programHelper.type(pharmacyStoreProgramReportHelper.program(pharmacyStoreProgramReport))
}

function rxChangesApproved(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "rx_changes_approved")
}

function rxChangesApprovedWithModification(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "rx_changes_approved_with_modification")
}

function rxChangesRejected(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "rx_changes_rejected")
}

function rxFollowUpsMade(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "rx_follow_ups_made")
}

function rxRecommendationsMade(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "rx_recommendations_made")
}

function satisfactionPatientCount(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "satisfaction_patient_count")
}

function type(pharmacyStoreProgramReport) {
  return fieldHelper.getField(pharmacyStoreProgramReport, "type")
}
