import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { programHelper } from './program.helper'
import { modelDatesHelper } from './model_dates.helper'

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
