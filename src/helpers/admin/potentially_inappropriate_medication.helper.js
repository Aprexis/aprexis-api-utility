import { fieldHelper } from '../field.helper'
import { idHelper } from '../id.helper'
import { goldStandardSpecificProductHelper } from '../gold_standard'

export const potentiallyInappropriateMedicationHelper = {
  ...idHelper,
  canDelete,
  canEdit,
  specificProduct,
  specificProductId,
  specificProductName,
  specificProductSynonym
}

function canDelete(_user, _potentiallyInappropriateMedication) {
  return false
}

function canEdit(_user, _potentiallyInappropriateMedication) {
  return false
}

function specificProduct(potentiallyInappropriateMedication) {
  return fieldHelper.getField(potentiallyInappropriateMedication, "specific_product")
}

function specificProductId(potentiallyInappropriateMedication) {
  return idHelper.associatedId(potentiallyInappropriateMedication, 'specific_product', potentiallyInappropriateMedicationHelper)
}

function specificProductName(potentiallyInappropriateMedication) {
  return goldStandardSpecificProductHelper.name(potentiallyInappropriateMedicationHelper.specificProduct(potentiallyInappropriateMedication))
}


function specificProductSynonym(potentiallyInappropriateMedication) {
  return goldStandardSpecificProductHelper.synonym(potentiallyInappropriateMedicationHelper.specificProduct(potentiallyInappropriateMedication))
}
