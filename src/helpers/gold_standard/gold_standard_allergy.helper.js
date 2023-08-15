import { fieldHelper } from '../field.helper'
import { modelDatesHelper } from '../model_dates.helper'

export const goldStandardAllergyHelper = {
  ...modelDatesHelper,
  allergyDescription,
  allergyId,
  allergyName,
  label
}

function allergyDescription(goldStandardAllergy) {
  return fieldHelper.getField(goldStandardAllergy, 'allergy_description')
}

function allergyId(goldStandardAllergy) {
  return fieldHelper.getField(goldStandardAllergy, 'allergy_id')
}

function allergyName(goldStandardAllergy) {
  return fieldHelper.getField(goldStandardAllergy, 'allergy_name')
}

function label(goldStandardAllergy) {
  return goldStandardAllergyHelper.allergyName(goldStandardAllergy)
}
