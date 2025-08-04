import { fieldHelper } from './field.helper.js'
import { interventionHelper } from './intervention.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const mapTalkingPointHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  intervention,
  interventionId,
  interventionIdentification,
  notes,
  subject
}

function canDelete(_mapTalkingPoint) {
  return false
}

function canEdit(_mapTalkingPoint) {
  return false
}

function intervention(mapTalkingPoint) {
  return fieldHelper.getField(mapTalkingPoint, 'intervention')
}

function interventionId(mapTalkingPoint) {
  return idHelper.associatedId(mapTalkingPoint, 'intervention', mapTalkingPointHelper)
}

function interventionIdentification(mapTalkingPoint) {
  return interventionHelper.identification(mapTalkingPointHelper.intervention(mapTalkingPoint))
}

function notes(mapTalkingPoint) {
  return fieldHelper.getField(mapTalkingPoint, 'notes')
}

function subject(mapTalkingPoint) {
  return fieldHelper.getField(mapTalkingPoint, 'subject')
}
