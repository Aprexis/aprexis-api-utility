import { idHelper, fieldHelper, modelDatesHelper } from "../"

export const goldStandardGsFormHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  formName,
  gsFormId
}

function canDelete(_goldStandardGsForm) {
  return false
}

function canEdit(_goldStandardGsForm) {
  return false
}

function formName(goldStandardGsForm) {
  return fieldHelper.getField(goldStandardGsForm, "form_name")
}

function gsFormId(goldStandardGsForm) {
  return idHelper.id(goldStandardGsForm, "gs_form_id")
}
