import { valueHelper } from './value.helper'
import { timeZones, usaTimeZones } from '../types'

export const timeZoneHelper = {
  displayTimeZone,
  timeZoneOptions
}

function displayTimeZone(timeZone) {
  const tz = Object.keys(timeZones).find(
    (tzKey) => {
      const tzValue = timeZones[tzKey]
      return tzValue == timeZone
    }
  )

  if (valueHelper.isValue(tz)) {
    return tz
  }

  return timeZone
}

function timeZoneOptions(useAllTimeZones = false) {
  const timeZonesHash = valueHelper.isSet(useAllTimeZones) ? timeZones : usaTimeZones

  return ["", ...Object.keys(timeZonesHash)]
}
