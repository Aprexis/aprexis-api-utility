import { valueHelper } from './value.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { questionKeyHelper } from './question_key.helper'

export const questionChoiceHelper = {
  ...idHelper,
  ...questionKeyHelper,
  choice,
  displayValue,
  value
}

function choice(choices, value) {
  if (!valueHelper.isValue(choices)) {
    return
  }

  return choices.find(
    (choice) => {
      const id = questionChoiceHelper.id(choice)

      return id == value
    }
  )
}

function displayValue(choices, value) {
  const choice = questionChoiceHelper.choice(choices, value)
  const choiceValue = questionChoiceHelper.value(choice)
  if (!valueHelper.isValue(choiceValue)) {
    return value
  }

  return choiceValue
}

function value(choice) {
  return fieldHelper.getField(choice, 'value')
}
