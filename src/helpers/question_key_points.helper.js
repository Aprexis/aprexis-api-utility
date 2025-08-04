import { fieldHelper } from './field.helper.js'
import { questionKeyHelper } from './question_key.helper.js'

export const questionKeyPointsHelper = {
  ...questionKeyHelper,
  text
}

function text(questionKeyPoints) {
  return fieldHelper.getField(questionKeyPoints, 'text')
}
