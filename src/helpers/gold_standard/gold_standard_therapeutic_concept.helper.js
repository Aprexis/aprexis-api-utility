import { fieldHelper, modelDatesHelper } from '../index.js'

export const goldStandardTherapeuticConceptHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  conceptName,
  therapeuticConceptId
}

function canDelete(_user, _goldStandardTherapeuticConcept) {
  return false
}

function canEdit(_user, _goldStandardTherapeuticConcept) {
  return false
}

function conceptName(goldStandardTherapeuticConcept) {
  return fieldHelper.getField(goldStandardTherapeuticConcept, 'concept_name')
}

function therapeuticConceptId(goldStandardTherapeuticConcept) {
  return fieldHelper.getField(goldStandardTherapeuticConcept, 'therapeutic_concept_id')
}
