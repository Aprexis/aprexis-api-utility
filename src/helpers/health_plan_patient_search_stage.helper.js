import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { nameHelper } from './name.helper.js'

export const healthPlanPatientSearchStageHelper = {
  ...idHelper,
  ...nameHelper,
  canDelete,
  canEdit,
  noPatientsCount,
  noProgramId,
  noProgramName,
  yesPatientsCount,
  yesProgramId,
  yesProgramName
}

function canDelete(_patientSearchStage) {
  return false
}

function canEdit(_patientSearchStage) {
  return false
}

function noPatientsCount(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'no_patients_count')
}

function noProgramId(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'no_program_id')
}

function noProgramName(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'no_program_name')
}

function yesPatientsCount(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'yes_patients_count')
}

function yesProgramId(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'yes_program_id')
}

function yesProgramName(patientSearchStage) {
  return fieldHelper.getField(patientSearchStage, 'yes_program_name')
}
