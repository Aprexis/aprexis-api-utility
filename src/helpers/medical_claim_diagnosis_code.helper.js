import { fieldHelper } from "./field.helper"

export const medicalClaimDiagnosisCodeHelper = {
  codeNumber,
  diagnosisCode
}

function codeNumber(medicalClaimDiagnosisCode) {
  return fieldHelper.getField(medicalClaimDiagnosisCode, 'code_number')
}

function diagnosisCode(medicalClaimDiagnosisCode) {
  return fieldHelper.getField(medicalClaimDiagnosisCode, 'diagnosis_code')
}
