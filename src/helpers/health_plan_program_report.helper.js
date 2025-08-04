import { fieldHelper } from './field.helper.js'
import { healthPlanHelper } from './health_plan.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const healthPlanProgramReportHelper = {
  ...idHelper,
  ...modelDatesHelper,
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
  healthPlan,
  healthPlanId,
  healthPlanName,
  immunizationsGiven,
  malesCount,
  patientCount,
  patientSatisfactionScore,
  programType,
  rxChangesApproved,
  rxChangesApprovedWithModification,
  rxChangesRejected,
  rxFollowUpsMade,
  rxRecommendationsMade,
  satisfactionPatientCount
}

function ageAverage(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "age_average")
}

function ageMax(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "age_max")
}

function ageMin(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "age_min")
}

function averageFollowUpsPerMember(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "average_follow_ups_per_member")
}

function averageRecommendationsPerMember(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "average_recommendations_per_member")
}

function averagePatientSatisfaction(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "average_patient_satisfaction")
}

function canDelete(_user, _healthPlanProgramReport) {
  return false
}

function canEdit(_user, _healthPlanProgramReport) {
  return false
}

function completedInterventions(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "completed_interventions")
}

function consultsScheduled(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "consults_scheduled")
}

function deviceInstructionsGiven(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "device_instructions_given")
}

function femalesCount(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "females_count")
}

function healthPlan(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "health_plan")
}

function healthPlanId(healthPlanProgramReport) {
  return idHelper.associatedId(healthPlanProgramReport, "health_plan", healthPlanProgramReportHelper)
}

function healthPlanName(healthPlanProgramReport) {
  return healthPlanHelper.name(healthPlanProgramReportHelper.healthPlan(healthPlanProgramReport))
}

function immunizationsGiven(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "immunizations_given")
}

function malesCount(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "males_count")
}

function patientCount(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "patient_count")
}

function patientSatisfactionScore(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "patient_satisfaction_score")
}

function programType(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "program_type")
}

function rxChangesApproved(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "rx_changes_approved")
}

function rxChangesApprovedWithModification(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "rx_changes_approved_with_modification")
}

function rxChangesRejected(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "rx_changes_rejected")
}

function rxFollowUpsMade(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "rx_follow_ups_made")
}

function rxRecommendationsMade(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "rx_recommendations_made")
}

function satisfactionPatientCount(healthPlanProgramReport) {
  return fieldHelper.getField(healthPlanProgramReport, "satisfaction_patient_count")
}
