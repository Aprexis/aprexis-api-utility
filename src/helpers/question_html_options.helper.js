import { fieldHelper } from './field.helper.js'
import { questionKeyHelper } from './question_key.helper.js'

export const questionHtmlOptionsHelper = {
  ...questionKeyHelper,
  options
}

function options(questionHtmlOptions) {
  return fieldHelper.getField(questionHtmlOptions, 'options')
}
