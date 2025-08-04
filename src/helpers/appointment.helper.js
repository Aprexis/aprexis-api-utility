import moment from 'moment'
import { valueHelper } from './value.helper.js'
import { dateHelper } from './date.helper.js'
import { fieldHelper } from './field.helper.js'
import { apiHelper } from './api.helper.js'
import { interventionHelper } from './intervention.helper.js'
import { pharmacyStoreHelper } from './pharmacy_store.helper.js'
import { userHelper } from './user.helper.js'
import { idHelper } from './id.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const appointmentHelper = {
  ...idHelper,
  ...modelDatesHelper,
  allDay,
  buildChanged,
  buildNewChanged,
  canBeCreated,
  canModifyField,
  changeField,
  changePharmacyStore,
  duration,
  endDate,
  eventEnds,
  eventLabel,
  findAllDayEvent,
  findScheduledEvent,
  intervention,
  patientName,
  pharmacyStore,
  pharmacyStoreId,
  pharmacyStoreIdentification,
  scheduledAt,
  startDate,
  text,
  title,
  toJSON,
  venue
}

const appointmentKeys = [
  'id',
  'intervention_id',
  'pharmacy_store_id',
  'user_id',
  'all_day',
  'scheduled_at',
  'duration',
  'title',
  'venue'
]

function allDay(appointment) {
  return fieldHelper.getField(appointment, 'all_day')
}

function buildChanged(appointment, changedAppointment) {
  if (valueHelper.isValue(changedAppointment)) {
    return changedAppointment
  }

  if (valueHelper.isValue(appointment.id)) {
    return copyIdentifiers(appointment)
  }

  return appointmentHelper.buildNewChanged(appointment)

  function copyIdentifiers(appointment) {
    return {
      id: appointment.id,
      intervention_id: appointment.intervention_id,
      pharmacy_store_id: appointment.pharmacy_store_id,
      user_id: appointment.user_id
    }
  }
}

function buildNewChanged(appointment) {
  return {
    ...appointment
  }
}

function canBeCreated(currentUser, user) {
  if (!userHelper.hasRole(
    user,
    ['pharmacy_store_admin', 'pharmacy_store_tech', 'pharmacy_store_user'].includes(userHelper.role(user))
  )) {
    return false
  }

  if (!userHelper.canCreateAppointment(currentUser)) {
    return false
  }

  return userHelper.hasRole(user, 'aprexis_admin') || userHelper.id(currentUser) === userHelper.id(user)
}

function canModifyField(_appointment, fieldName) {
  return fieldName != 'user_id'
}

function changeField(model, changedModel, fieldName, newValue) {
  return fieldHelper.changeValue('appointment', model, changedModel, fieldName, newValue)
}

function changePharmacyStore(appointment, changedAppointment, pharmacyStore) {
  const myChangedAppointment = this.buildChanged(appointment, changedAppointment)

  return {
    appointment: {
      ...appointment,
      pharmacy_store_id: pharmacyStore.id,
      pharmacyStore
    },
    changedAppointment: {
      ...myChangedAppointment,
      pharmacy_store_id: pharmacyStore.id,
      pharmacyStore
    }
  }
}

function duration(appointment) {
  return fieldHelper.getField(appointment, 'duration')
}

function endDate(appointment) {
  const startTime = dateHelper.makeDate(appointmentHelper.scheduledAt(appointment))
  const duration = appointmentHelper.duration(appointment)
  const endTime = moment(startTime).add(duration, 'm').toDate()

  return new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())
}

function eventEnds(appointment, hour, minute, minutes) {
  if (!valueHelper.isValue(appointment) || valueHelper.isSet(appointmentHelper.allDay(appointment))) {
    return false
  }

  const startTime = dateHelper.makeDate(appointmentHelper.scheduledAt(appointment))
  const duration = appointmentHelper.duration(appointment)
  const endTime = moment(startTime).add(duration, 'm').toDate()
  const scheduledHour = endTime.getHours()
  if (scheduledHour < hour) {
    return false
  } else if (scheduledHour > hour) {
    return true
  }

  const scheduledMinute = endTime.getMinutes()
  if (scheduledMinute < minute) {
    return false
  }

  return scheduledMinute < minute + minutes
}

function eventLabel(appointment) {
  const title = appointmentHelper.title(appointment)
  const venue = appointmentHelper.venue(appointment)

  if (!valueHelper.isStringValue(venue)) {
    return title
  }

  return `${title} (${venue})`
}

function findAllDayEvent(appointments, date) {
  if (!valueHelper.isValue(appointments)) {
    return
  }

  return appointments.find((appointment) => checkAppointmentDate(appointment, date))

  function checkAppointmentDate(appointment, date) {
    const startDate = appointmentHelper.startDate(appointment)
    const endDate = appointmentHelper.endDate(appointment)

    return (+startDate <= +date) && (+endDate >= +date)
  }
}

function findScheduledEvent(appointments, currentDate, hour, minute, minutes) {
  if (!valueHelper.isValue(appointments)) {
    return
  }

  const periodStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hour,
    minute
  )
  const periodEnd = new Date(
    periodStart.getFullYear(),
    periodStart.getMonth(),
    periodStart.getDate(),
    periodStart.getHours(),
    periodStart.getMinutes() + minutes
  )

  return appointments.find((appointment) => checkAppointmentDate(appointment, periodStart, periodEnd))

  function checkAllDayAppointment(appointment, periodStart, periodEnd) {
    const dayStart = new Date(periodStart.getFullYear(), periodStart.getMonth(), periodStart.getDate())
    const dayEnd = new Date(periodEnd.getFullYear(), periodEnd.getMonth(), periodEnd.getDate())
    const appointmentStart = appointmentHelper.scheduledAt(appointment)
    const duration = appointmentHelper.duration(appointment)
    const appointmentEnd = moment(appointmentStart).add(duration, 'm').toDate()

    return !((+appointmentEnd < +dayStart) || (+appointmentStart > +dayEnd))
  }

  function checkAppointmentDate(appointment, periodStart, periodEnd) {
    if (valueHelper.isSet(appointmentHelper.allDay(appointment))) {
      return checkAllDayAppointment(appointment, periodStart, periodEnd)
    }

    const scheduledAt = dateHelper.makeDate(appointmentHelper.scheduledAt(appointment))
    const duration = appointmentHelper.duration(appointment)
    const scheduledUntil = moment(scheduledAt).add(duration, 'm').toDate()
    return !((+scheduledUntil <= +periodStart) || (+scheduledAt >= +periodEnd))
  }
}

function intervention(appointment) {
  return fieldHelper.getField(appointment, 'intervention')
}

function patientName(appointment, prefix = '', allowBlank = false) {
  return interventionHelper.patientName(appointmentHelper.intervention(appointment), prefix, allowBlank)
}

function pharmacyStore(appointment) {
  return fieldHelper.getField(appointment, 'pharmacy_store')
}

function pharmacyStoreId(appointment) {
  return idHelper.associatedId(appointment, 'pharmacy_store', appointmentHelper)
}

function pharmacyStoreIdentification(appointment) {
  return pharmacyStoreHelper.identification(appointmentHelper.pharmacyStore(appointment))
}

function scheduledAt(appointment) {
  return fieldHelper.getField(appointment, 'scheduled_at')
}

function startDate(appointment) {
  const scheduledAt = dateHelper.makeDate(appointmentHelper.scheduledAt(appointment))
  if (!valueHelper.isValue(scheduledAt)) {
    return
  }

  return new Date(scheduledAt.getFullYear(), scheduledAt.getMonth(), scheduledAt.getDate())
}

function text(appointment) {
  const title = appointmentHelper.title(appointment)
  const patientName = appointmentHelper.patientName(appointment, '', true)
  const pharmacyStoreIdentification = appointmentHelper.pharmacyStoreIdentification(appointment)
  const venue = appointmentHelper.venue(appointment)
  let text = title

  if (valueHelper.isStringValue(patientName)) {
    text = `${text} with ${patientName}`
  }

  switch (venue) {
    case 'In Person':
      text = `${text} at ${pharmacyStoreIdentification}`
      break

    default:
      text = `${text} by telephone`
  }

  return text
}

function title(appointment) {
  return fieldHelper.getField(appointment, 'title')
}

function toJSON(appointment) {
  return apiHelper.toJSON(appointment, appointmentKeys)
}

function venue(appointment) {
  return fieldHelper.getField(appointment, 'venue')
}
