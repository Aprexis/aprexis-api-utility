import { fieldHelper } from './field.helper'

export const modelConfigsHelper = {
  modelConfigField,
  modelConfigKeys
}

function modelConfigField(model, field) {
  return fieldHelper.getField(model, field)
}

function modelConfigKeys(model) {
  return fieldHelper.getField(model, 'model_config_keys')
}
