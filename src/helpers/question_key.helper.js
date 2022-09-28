import { fieldHelper } from "./field.helper"

export const questionKeyHelper = {
  questionKey
}

function questionKey(model) {
  return fieldHelper.getField(model, 'question_key')
}
