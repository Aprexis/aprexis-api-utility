import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'
import { healthPlanPatientSearchAlgorithmHelper } from './health_plan_patient_search_algorithm.helper.js'
import { idHelper } from './id.helper.js'

export const healthPlanPatientSearchAlgorithmBatchHelper = {
  batch,
  canDelete,
  canEdit,
  displayBatch,
  patientSearchAlgorithm,
  patientSearchAlgorithmId,
  patientSearchAlgorithmName,
  patientSearchStages,
}

function batch(patientSearchAlgorithmBatch) {
  return fieldHelper.getField(patientSearchAlgorithmBatch, 'batch')
}

function canDelete(_patientSearchStageBatch) {
  return false
}

function canEdit(_patientSearchStageBatch) {
  return false
}

function displayBatch(patientSearchAlgorithmBatch) {
  return dateHelper.displayDateTime(Date.new(healthPlanPatientSearchAlgorithmBatchHelper.batch(patientSearchAlgorithmBatch)))
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

function patientSearchStages(patientSearchAlgorithmBatch) {
  return fieldHelper.getField(patientSearchAlgorithmBatch, 'patient_search_stages')
}
