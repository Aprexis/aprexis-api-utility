import { API } from './api.js'

export const patientHealthPlanInsuranceDetailApi = {
  profileForPatient
}

function profileForPatient(credentials, patient_id, onSuccess, onFailure) {
  if (!API.validateId('patient ID', patient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/patients/${patient_id}/patient_health_plan_insurance_details/profile_for_patient`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
