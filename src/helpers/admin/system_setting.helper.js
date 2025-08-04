import { fieldHelper } from '../field.helper.js'
import { idHelper } from '../id.helper.js'
import { modelDatesHelper } from '../model_dates.helper.js'

export const systemSettingHelper = {
  ...idHelper,
  ...modelDatesHelper,
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
