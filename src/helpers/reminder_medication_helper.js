import { medicationHelper } from './admin/medication.helper'
import { fieldHelper } from './field.helper'
import { idHelper } from './id.helper'
import { patientMedicationHelper } from './patient_medication.helper'

export const reminderMedicationHelper = {
  ...idHelper,
  buildFromPatientMedication,
  medication,
  medicationId,
  medicationLabel
}

function buildFromPatientMedication(patientMedication) {
  const medicationId = patientMedicationHelper.medicationId(patientMedication)

  return {
    medication_id: medicationId,
    medication: {
      id: medicationId,
      label: patientMedicationHelper.medicationLabel(patientMedication)
    }
  }
}

function medication(reminderMedication) {
  return fieldHelper.getField(reminderMedication, 'medication')
}

function medicationId(reminderMedication) {
  return idHelper.associatedId(reminderMedication, 'medication', reminderMedicationHelper)
}

function medicationLabel(reminderMedication) {
  return medicationHelper.label(reminderMedicationHelper.medication(reminderMedication))
}
