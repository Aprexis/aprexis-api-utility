import { fieldHelper } from "./field.helper";
import { questionKeyHelper } from "./question_key.helper";

export const questionKeyPointsHelper = {
  ...questionKeyHelper,
  text
}

function text(questionKeyPoints) {
  return fieldHelper.getField(questionKeyPoints, 'text')
}
