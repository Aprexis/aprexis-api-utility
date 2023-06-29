import { fieldHelper } from './field.helper'
import { healthPlanPatientSearchAlgorithmHelper } from "./health_plan_patient_search_algorithm.helper"
import { idHelper } from "./id.helper"

export const healthPlanPatientSearchAlgorithmBatchHelper = {
  batch,
  patientSearchAlgorithm,
  patientSearchAlgorithmId,
  patientSearchAlgorithmName
}

function batch(patientSearchAlgorithmBatch) {
  return fieldHelper.getField(patientSearchAlgorithmBatch, 'batch')
}

function patientSearchAlgorithm(patientSearchAlgorithmBatch) {
  return fieldHelper.getField(patientSearchAlgorithmBatch, 'patient_search_algorithm')
}

function patientSearchAlgorithmId(patientSearchAlgorithmBatch) {
  return idHelper.associatedId(patientSearchAlgorithmBatch, 'patient_search_algorithm_id', healthPlanPatientSearchAlgorithmBatchHelper)
}

function patientSearchAlgorithmName(patientSearchAlgorithmBatch) {
  return healthPlanPatientSearchAlgorithmHelper.name(healthPlanPatientSearchAlgorithmBatchHelper.patientSearchAlgorithm(patientSearchAlgorithmBatch))
}
