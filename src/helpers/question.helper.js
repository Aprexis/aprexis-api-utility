import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { questionKeyHelper } from './question_key.helper.js'
import { questionChoiceHelper } from './question_choice.helper.js'
import { questionOptionHelper } from './question_option.helper.js'

export const questionHelper = {
  ...questionKeyHelper,
  actionClass,
  afterText,
  beforeText,
  choiceOptions,
  choices,
  displayValue,
  htmlOptions,
  inlineText,
  interventionRelation,
  keyPoints,
  label,
  labelTooltip,
  optionLabel,
  options,
  popupLabel,
  popupText,
  questionType,
  recommended,
  shortLabel,
  submittable,
  validations,
  verifications
}

function actionClass(question) {
  return fieldHelper.getField(question, 'action_class')
}

function afterText(question) {
  return fieldHelper.getField(question, 'after_text')
}

function beforeText(question) {
  return fieldHelper.getField(question, 'before_text')
}

function choiceOptions(question) {
  return fieldHelper.getField(question, 'choice_options')
}

function choices(question) {
  return fieldHelper.getField(question, 'choices')
}

function displayValue(question, value) {
  const questionType = questionHelper.questionType(question)

  switch (questionType) {
    case 'RadioButton':
      return radioButtonValue(question, value)

    case 'Select':
      return selectValue(question, value)

    default:
      return valueHelper.makeString(value)
  }

  function radioButtonValue(question, value) {
    const rbValue = questionOptionHelper.displayValue(questionHelper.options(question), value)
    if (rbValue === value && !isNaN(rbValue)) {
      return valueHelper.yesNo(rbValue !== '0')
    }

    return value
  }

  function selectValue(question, value) {
    return questionChoiceHelper.displayValue(questionHelper.choices(question), value)
  }
}

function htmlOptions(question) {
  return fieldHelper.getField(question, 'html_options')
}

function inlineText(question) {
  return fieldHelper.getField(question, 'inline_text')
}

function interventionRelation(question) {
  return fieldHelper.getField(question, 'intervention_relation')
}

function keyPoints(question) {
  return fieldHelper.getField(question, 'key_points')
}

function label(question) {
  return fieldHelper.getField(question, 'label')
}

function labelTooltip(question) {
  return fieldHelper.getField(question, 'label_tooltip')
}

function optionLabel(question) {
  return fieldHelper.getField(question, 'option_label')
}

function options(question) {
  return fieldHelper.getField(question, 'options')
}

function popupLabel(question) {
  return fieldHelper.getField(question, 'popup_label')
}

function popupText(question) {
  return fieldHelper.getField(question, 'popup_text')
}

function questionType(question) {
  return fieldHelper.getField(question, 'question_type')
}

function recommended(question) {
  return fieldHelper.getField(question, 'recommended')
}

function shortLabel(question) {
  return fieldHelper.getField(question, 'short_label')
}

function submittable(question) {
  return fieldHelper.getField(question, 'submittable')
}

function validations(question) {
  return fieldHelper.getField(question, 'validations')
}

function verifications(question) {
  return fieldHelper.getField(quesiton, 'verifications')
}

