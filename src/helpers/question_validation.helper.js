import { fieldHelper } from "./field.helper";
import { questionKeyHelper } from "./question_key.helper";

export const questionValidationHelper = {
  ...questionKeyHelper,
  validationType,
  validationValue
}

function validationType(questionValidation) {
  return fieldHelper.getField(questionValidation, 'validation_type')
}

function validationValue(questionValidation) {
  return fieldHelper.getField(questionValidation, 'validation_value')
}
