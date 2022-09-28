import { fieldHelper } from "./field.helper"
import { questionKeyHelper } from "./question_key.helper"

export const questionChoiceOptionHelper = {
  ...questionKeyHelper,
  includeBlank,
  choicePrompt,
  selected
}

function includeBlank(questionChoiceOption) {
  return fieldHelper.getField(questionChoiceOption, 'include_blank')
}

function choicePrompt(questionChoiceOption) {
  return fieldHelper.getField(questionChoiceOption, 'prompt')
}

function selected(questionChoiceOption) {
  return fieldHelper.getField(questionChoiceOption, 'selected')
}
