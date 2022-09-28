import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { questionKeyHelper } from './question_key.helper'

export const questionOptionHelper = {
  ...questionKeyHelper,
  ...idHelper,
  displayPopopIf,
  displayValue,
  is,
  label,
  option,
  popupText
}

function displayPopopIf(questionOption) {
  return fieldHelper.getField(questionOption, 'display_popup_if')
}

function displayValue(questionOptions, value) {
  const questionOption = questionOptionHelper.option(questionOptions, value)
  const label = questionOptionHelper.label(questionOption)
  if (!valueHelper.isValue(label)) {
    return value
  }

  return label
}

function is(questionOption) {
  fieldHelper.getField(questionOption, 'is')
}

function label(questionOption) {
  return fieldHelper.getField(questionOption, 'label')
}

function option(questionOptions, value) {
  if (!valueHelper.isValue(questionOptions)) {
    return
  }

  return questionOptions.find(
    (questionOption) => {
      const id = questionOptionHelper.id(questionOption)

      return id == value
    }
  )
}

function popupText(questionOption) {
  return fieldHelper.getField(questionOption, 'popup_text')
}
