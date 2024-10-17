import { fieldHelper, idHelper, modelDatesHelper } from "../"

export const goldStandardGenericProductClinicalHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  genericProductClinicalId,
  name,
  notSplittable,
  synonym
}

function canDelete(_user, _goldStandardGenericProductClinical) {
  return false
}

function canEdit(_user, _goldStandardGenericProductClinical) {
  return false
}

function genericProductClinicalId(goldStandardGenericProductClinical) {
  return idHelper.id(goldStandardGenericProductClinical, "generic_product_clinical_id")
}

function name(goldStandardGenericProductClinical) {
  return fieldHelper.getField(goldStandardGenericProductClinical, 'name')
}

function notSplittable(goldStandardGenericProductClinical) {
  return fieldHelper.getField(goldStandardGenericProductClinical, 'not_splittable')
}

function synonym(goldStandardGenericProductClinical) {
  return fieldHelper.getField(goldStandardGenericProductClinical, 'synonym')
}
