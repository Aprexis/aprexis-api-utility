import { fieldHelper } from './field.helper.js'
import { questionKeyHelper } from './question_key.helper.js'

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
