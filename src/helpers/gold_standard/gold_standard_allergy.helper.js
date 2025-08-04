import { fieldHelper } from '../field.helper.js'
import { modelDatesHelper } from '../model_dates.helper.js'

export const goldStandardAllergyHelper = {
  ...modelDatesHelper,
  allergyDescription,
  allergyId,
  allergyName,
  canDelete,
  canEdit,
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

function canDelete(_user, _goldStandardAllergy) {
  return false
}

function canEdit(_user, _goldStandardAllergy) {
  return false
}

function label(goldStandardAllergy) {
  return goldStandardAllergyHelper.allergyName(goldStandardAllergy)
}
