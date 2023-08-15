import { fieldHelper } from '../field.helper'

export const goldStandardSpecificProductHelper = {
  name,
  specificProductId,
  synonym
}

function name(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'name')
}

function specificProductId(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'specific_product_id')
}

function synonym(goldStandardSpecificProduct) {
  return fieldHelper.getField(goldStandardSpecificProduct, 'synonym')
}
