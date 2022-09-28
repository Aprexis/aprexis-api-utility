import { fieldHelper } from "./field.helper";
import { questionKeyHelper } from "./question_key.helper";

export const questionVerificationHelper = {
  ...questionKeyHelper,
  verificationType,
  verifiedIf
}

function verificationType(questionVerification) {
  return fieldHelper.getField(questionVerification, 'verification_type')
}

function verifiedIf(questionVerification) {
  return fieldHelper.getField(questionVerification, 'verified_if')
}
