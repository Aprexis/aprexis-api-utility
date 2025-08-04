import { valueHelper } from './value.helper.js'
import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'
import { interventionHelper } from './intervention.helper.js'
import { localeLanguages } from '../types/locale_languages.type.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const interventionDocumentHelper = {
  ...idHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  consultEndDate,
  consultStartDate,
  displayConsultEndDate,
  displayConsultStartDate,
  displayLocale,
  filePath,
  generator,
  intervention,
  interventionId,
  interventionIdentification,
  locale,
  patientName,
  pharmacyStoreDisplay,
  programName,
  title
}

function canDelete(_user, _interventionDocument) {
  return false
}

function canEdit(_user, _interventionDocument) {
  return false
}

function consultEndDate(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'consult_end_date')
}

function consultStartDate(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'consult_start_date')
}

function displayConsultEndDate(interventionDocument) {
  return dateHelper.formatDate(interventionDocumentHelper.consultEndDate(interventionDocument))
}

function displayConsultStartDate(interventionDocument) {
  return dateHelper.formatDate(interventionDocumentHelper.consultStartDate(interventionDocument))
}

function displayLocale(interventionDocument) {
  const locale = interventionDocumentHelper.locale(interventionDocument)
  if (!valueHelper.isStringValue(locale) || !valueHelper.isStringValue(localeLanguages[locale])) {
    return 'English'
  }

  return localeLanguages[locale]
}

function filePath(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'file_path')
}

function generator(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'generator')
}

function intervention(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'intervention')
}

function interventionId(interventionDocument) {
  return idHelper.associatedId(interventionDocument, 'intervention', interventionDocumentHelper)
}

function interventionIdentification(interventionDocument) {
  return interventionHelper.identification(interventionDocumentHelper.intervention(interventionDocument))
}

function locale(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'locale')
}

function patientName(interventionDocument) {
  return interventionHelper.patientName(interventionDocumentHelper.intervention(interventionDocument))
}

function pharmacyStoreDisplay(interventionDocument) {
  return interventionHelper.pharmacyStoreDisplay(interventionDocumentHelper.intervention(interventionDocument))
}

function programName(interventionDocument) {
  return interventionHelper.programName(interventionDocumentHelper.intervention(interventionDocument))
}

function title(interventionDocument) {
  return fieldHelper.getField(interventionDocument, 'title')
}
