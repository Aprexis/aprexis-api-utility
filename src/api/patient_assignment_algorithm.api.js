import { API } from './api'

export const patientAssignmentAlgorithmApi = {
  patientAssignmentAlgorithmForProgram
}

function patientAssignmentAlgorithmForProgram(credentials, program_id, onSuccess, onFailure) {
  if (!API.validateId('program ID', program_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/programs/${program_id}/program_patient_assignment_algorithm`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
