import { fieldHelper } from './field.helper.js'
import { questionKeyHelper } from './question_key.helper.js'

export const questionChoiceOptionsHelper = {
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
