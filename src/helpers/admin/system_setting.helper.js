import { fieldHelper } from '../field.helper'
import { idHelper } from '../id.helper'

export const systemSettingHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  key,
  value
}

function canDelete(_user, _systemSetting) {
  return false
}

function canEdit(_user, _systemSetting) {
  return false
}

function key(systemSetting) {
  return fieldHelper.getField(systemSetting, 'key')
}

function value(systemSetting) {
  return fieldHelper.getField(systemSetting, 'value')
}
