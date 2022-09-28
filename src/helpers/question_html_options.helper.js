import { fieldHelper } from "./field.helper"
import { questionKeyHelper } from "./question_key.helper"

export const questionHtmlOptionsHelper = {
  ...questionKeyHelper,
  options
}

function options(questionHtmlOptions) {
  return fieldHelper.getField(questionHtmlOptions, 'options')
}
