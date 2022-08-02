import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import moment from 'moment'
import { valueHelper } from './value.helper'

export const dateHelper = {
  convertDateStringToDate,
  convertDateToDateString,
  convertDateToTimeString,
  convertTimeStringToDate,
  displayDate,
  displayDateTime,
  formatDate,
  isDateValue,
  isTimeValue,
  isValidDate,
  makeDate,
  parseDate
}

function determineLocale() {
  switch (valueHelper.detectHostEnvironment()) {
    case 'web':
      return navigator.languages[0]

    default:
      return 'en-US'
  }
}

function localeFromLocaleString(localeString) {
  const myLocaleString = valueHelper.isValue(localeString) ? localeString : 'en-US'
  switch (typeof myLocaleString) {
    case 'string':
      const result = require(`date-fns/locale/${localeString}`)
      if (valueHelper.isValue(result.default)) {
        return result.default
      }
      return result

    default:
      return myLocaleString
  }
}

function convertDateStringToDate(dateString, format, localeString) {
  return dateHelper.parseDate(dateString, format, localeString)
}

function convertDateToDateString(date, format, localeString) {
  if (dateHelper.isValidDate(date, false)) {
    return dateHelper.formatDate(dateHelper.makeDate(date), format, localeString)
  }

  if (!valueHelper.isValue(date)) {
    return ''
  }

  return `${date}`
}

function convertDateToTimeString(date, format, localeString) {
  if (valueHelper.isStringValue(date) && date.length == 5) {
    return date
  }

  if (!dateHelper.isValidDate(date)) {
    return '00:00'
  }

  return dateHelper.formatDate(dateHelper.makeDate(date), format, localeString)
}

function convertTimeStringToDate(timeString, format, localeString) {
  return dateHelper.parseDate(timeString, format, localeString)
}

function displayDate(dateValue, format = 'P') {
  if (!valueHelper.isValue(dateValue)) {
    return ''
  }

  return dateHelper.formatDate(dateHelper.makeDate(dateValue), format, determineLocale())
}

function displayDateTime(dateTime, format = 'Ppp') {
  if (!valueHelper.isValue(dateTime)) {
    return ''
  }

  return dateHelper.formatDate(dateHelper.makeDate(dateTime), format, determineLocale())
}

function formatDate(date, format, localeString) {
  if (!valueHelper.isValue(date)) {
    return
  }

  return dateFnsFormat(date, format, { locale: localeFromLocaleString(localeString) })
}

function isDateValue(value) {
  const date = dateHelper.makeDate(value)

  return valueHelper.isValue(date)
}

function isTimeValue(value) {
  if (!valueHelper.isValue(value)) {
    return false
  }

  if (valueHelper.isStringValue(value) && value.length == 5) {
    return isStringTime(value)
  }

  return dateHelper.isDateValue(value)

  function isStringTime(value) {
    const parts = value.split(':')
    if (parts.length !== 2) {
      return false
    }

    for (let idx = 0; idx < 2; ++idx) {
      if (!valueHelper.isNumberValue(parts[idx])) {
        return false
      }

      const maximum = idx == 0 ? 23 : 59
      const number = parseInt(parts[idx])
      if (number < 0 || number > maximum) {
        return false
      }
    }

    return true
  }
}

function isValidDate(date, allowBlank = false) {
  if (!valueHelper.isValue(date)) {
    return valueHelper.isSet(allowBlank)
  }

  if (typeof date === 'string') {
    if (!valueHelper.isStringValue(date)) {
      return valueHelper.isSet(allowBlank)
    }
  }

  return dateHelper.isDateValue(date)
}

function makeDate(value) {
  if (!valueHelper.isValue(value)) {
    return
  }
  if (typeof value === 'object') {
    if (valueHelper.isFunction(value.getMonth)) {
      return value
    }

    return
  }
  if (!valueHelper.isStringValue(value)) {
    return
  }
  if (value.length === 10) {
    return dateHelper.parseDate(value, 'yyyy-MM-dd')
  }

  const dateMoment = moment(value)
  if (!dateMoment.isValid()) {
    return
  }


  return dateMoment.toDate()
}

function parseDate(dateTimeString, format, localeString) {
  return dateFnsParse(dateTimeString, format, new Date(), { locale: localeFromLocaleString(localeString) })
}
