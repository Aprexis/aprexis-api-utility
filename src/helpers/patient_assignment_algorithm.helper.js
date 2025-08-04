import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { programHelper } from './program.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const patientAssignmentAlgorithmHelper = {
  ...idHelper,
  ...modelDatesHelper,
  healthPlan,
  healthPlanId,
  healthPlanName,
  program,
  programId,
  programName,
  type
}

function healthPlan(patientAssignmentAlgorithm) {
  return programHelper.healthPlan(patientAssignmentAlgorithmHelper.program(patientAssignmentAlgorithm))
}

function healthPlanId(patientAssignmentAlgorithm) {
  return programHelper.healthPlanId(patientAssignmentAlgorithmHelper.program(patientAssignmentAlgorithm))
}

function healthPlanName(patientAssignmentAlgorithm) {
  return programHelper.healthPlanName(patientAssignmentAlgorithmHelper.program(patientAssignmentAlgorithm))
}

function program(patientAssignmentAlgorithm) {
  return fieldHelper.getField(patientAssignmentAlgorithm, "program")
}

function programId(patientAssignmentAlgorithm) {
  return idHelper.associatedId(patientAssignmentAlgorithm, "program", patientAssignmentAlgorithmHelper)
}

function programName(patientAssignmentAlgorithm) {
  return programHelper.name(patientAssignmentAlgorithmHelper.program(patientAssignmentAlgorithm))
}

function type(patientAssignmentAlgorithm) {
  return fieldHelper.getField(patientAssignmentAlgorithm, "type")
}
