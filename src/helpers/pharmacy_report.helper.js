import { fieldHelper } from './field.helper.js'
import { healthPlanHelper } from './health_plan.helper.js'
import { idHelper } from './id.helper.js'
import { pharmacyChainHelper } from './pharmacy_chain.helper.js'
import { pharmacyStoreHelper } from './pharmacy_store.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const pharmacyReportHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  clinicallyRelevant,
  clinicallyRelevantClosed,
  clinicallyRelevantCompleted,
  cmr,
  cmrClosed,
  cmrCompleted,
  cmrFollowUp,
  cmrFollowUpClosed,
  cmrFollowUpCompleted,
  costEffectiveness,
  costEffectivenessClosed,
  costEffectivenessCompleted,
  endDate,
  healthPlan,
  healthPlanCode,
  healthPlanId,
  healthPlanName,
  pharmacyChain,
  pharmacyChainId,
  pharmacyName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification
}

function canDelete(_user, _pharmacyReport) {
  return false
}

function canEdit(_user, _pharmacyReport) {
  return false
}

function clinicallyRelevant(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "clinically_relevant")
}

function clinicallyRelevantClosed(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "clinically_relevant_closed")
}

function clinicallyRelevantCompleted(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "clinically_relevant_completed")
}

function cmr(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr")
}

function cmrClosed(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr_closed")
}

function cmrCompleted(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr_completed")
}

function cmrFollowUp(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr_follow_up")
}

function cmrFollowUpClosed(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr_follow_up_closed")
}

function cmrFollowUpCompleted(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cmr_follow_up_completed")
}

function costEffectiveness(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cost_effectiveness")
}

function costEffectivenessClosed(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cost_effectiveness_closed")
}

function costEffectivenessCompleted(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "cost_effectiveness_completed")
}

function endDate(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "end_date")
}

function healthPlan(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "health_plan")
}

function healthPlanCode(pharmacyReport) {
  return healthPlanHelper.code(pharmacyReportHelper.healthPlan(pharmacyReport))
}

function healthPlanId(pharmacyReport) {
  return idHelper.associatedId(pharmacyReport, "health_plan", pharmacyReportHelper)
}

function healthPlanName(pharmacyReport) {
  return healthPlanHelper.name(pharmacyReportHelper.healthPlan(pharmacyReport))
}

function pharmacyChain(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "pharmacy")
}

function pharmacyChainId(pharmacyReport) {
  return idHelper.associatedId(pharmacyReport, "pharmacy", pharmacyReportHelper)
}

function pharmacyName(pharmacyReport) {
  return pharmacyChainHelper.name(pharmacyReportHelper.pharmacyChain(pharmacyReport))
}

function pharmacyStore(pharmacyReport) {
  return fieldHelper.getField(pharmacyReport, "pharmacy_store")
}

function pharmacyStoreId(pharmacyReport) {
  return idHelper.associatedId(pharmacyReport, "pharmacy_store", pharmacyReportHelper)
}

function pharmacyStoreIdentification(pharmacyReport) {
  return pharmacyStoreHelper.identification(pharmacyReportHelper.pharmacyStore(pharmacyReport))
}
