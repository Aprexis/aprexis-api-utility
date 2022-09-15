import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { diseaseHelper } from './admin/disease.helper'
import { patientHelper } from './patient.helper'
import { modelDatesHelper } from './model_dates.helper'

export const patientDiseaseHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canBeCreated,
  canDelete,
  canEdit,
  disease,
  diseaseDescription,
  diseaseName,
  patient,
  patientName
}

function canBeCreated(_user, _pathEntries) {
  return false
}

function canDelete(_user, _patientDisease) {
  return false
}

function canEdit(_user, _patientDisease) {
  return false
}

function disease(patientDisease) {
  return fieldHelper.getField(patientDisease, 'disease')
}

function diseaseDescription(patientDisease) {
  return diseaseHelper.description(patientDiseaseHelper.disease(patientDisease))
}

function diseaseName(patientDisease) {
  return diseaseHelper.name(patientDiseaseHelper.disease(patientDisease))
}

function patient(patientDisease) {
  return fieldHelper.getField(patientDisease, 'patient')
}

function patientName(patientDisease) {
  return patientHelper.name(patientDiseaseHelper.patient(patientDisease))
}
