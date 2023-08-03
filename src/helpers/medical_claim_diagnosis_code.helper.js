import { fieldHelper } from "./field.helper"

export const medicalClaimDiagnosisCodeHelper = {
  canDelete,
  canEdit,
  codeNumber,
  diagnosisCode
}

function canDelete(_user, _medicalClaimDiagnosisCode) {
  return false
}

function canEdit(_user, _medicalClaimDiagnosisCode) {
  return false
}

function codeNumber(medicalClaimDiagnosisCode) {
  return fieldHelper.getField(medicalClaimDiagnosisCode, 'code_number')
}

function diagnosisCode(medicalClaimDiagnosisCode) {
  return fieldHelper.getField(medicalClaimDiagnosisCode, 'diagnosis_code')
}
