import { fieldHelper } from './field.helper.js'

export const questionKeyHelper = {
  questionKey
}

function questionKey(model) {
  return fieldHelper.getField(model, 'question_key')
}
