import { fieldHelper } from './field.helper'
import { healthPlanHelper } from './health_plan.helper'
import { healthPlanPatientSearchAlgorithmHelper } from './health_plan_patient_search_algorithm.helper'
import { healthPlanPatientSearchStageHelper } from './health_plan_patient_search_stage.helper'
import { idHelper } from './id.helper'
import { patientHelper } from './patient.helper'
import { pharmacyStoreHelper } from './pharmacy_store.helper'
import { programHelper } from './program.helper'

export const dryRunProgramPatientAssignmentHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  healthPlan,
  healthPlanId,
  healthPlanName,
  patient,
  patientId,
  patientName,
  patientSearchAlgorithm,
  patientSearchAlgorithmId,
  patientSearchAlgorithmName,
  patientSearchStage,
  patientSearchStageId,
  patientSearchStageName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreName,
  program,
  programId,
  programName
}

function canDelete(_user, _dryRunProgramPatientAssignment) {
  return false
}

function canEdit(_user, _dryRunProgramPatientAssignment) {
  return false
}

function healthPlan(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'health_plan')
}

function healthPlanId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'health_plan', dryRunProgramPatientAssignmentHelper)
}

function healthPlanName(dryRunProgramPatientAssignment) {
  return healthPlanHelper.name(dryRunProgramPatientAssignmentHelper.healthPlan(dryRunProgramPatientAssignment))
}

function patient(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'patient')
}

function patientId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'patient', dryRunProgramPatientAssignmentHelper)
}

function patientName(dryRunProgramPatientAssignment) {
  return patientHelper.name(dryRunProgramPatientAssignmentHelper.patient(dryRunProgramPatientAssignment))
}

function patientSearchAlgorithm(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'patient_search_algorithm')
}

function patientSearchAlgorithmId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'patient_search_algorithm', dryRunProgramPatientAssignmentHelper)
}

function patientSearchAlgorithmName(dryRunProgramPatientAssignment) {
  return healthPlanPatientSearchAlgorithmHelper.name(dryRunProgramPatientAssignmentHelper.patientSearchAlgorithm(dryRunProgramPatientAssignment))
}

function patientSearchStage(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'patient_search_stage')
}

function patientSearchStageId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'patient_search_stage', dryRunProgramPatientAssignmentHelper)
}

function patientSearchStageName(dryRunProgramPatientAssignment) {
  return healthPlanPatientSearchStageHelper.name(dryRunProgramPatientAssignmentHelper.patientSearchStage(dryRunProgramPatientAssignment))
}

function pharmacyStore(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'pharmacy-store')
}

function pharmacyStoreId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'pharmacy-store', dryRunProgramPatientAssignmentHelper)
}

function pharmacyStoreName(dryRunProgramPatientAssignment) {
  return pharmacyStoreHelper.name(dryRunProgramPatientAssignmentHelper.pharmacyStore(dryRunProgramPatientAssignment))
}

function program(dryRunProgramPatientAssignment) {
  return fieldHelper.getField(dryRunProgramPatientAssignment, 'progrma')
}

function programId(dryRunProgramPatientAssignment) {
  return idHelper.associatedId(dryRunProgramPatientAssignment, 'program', dryRunProgramPatientAssignmentHelper)
}

function programName(dryRunProgramPatientAssignment) {
  return programHelper.name(dryRunProgramPatientAssignmentHelper.program(dryRunProgramPatientAssignment))
}
