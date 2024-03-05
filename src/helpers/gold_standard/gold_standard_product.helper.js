import { fieldHelper, valueHelper } from '..'
import { medicationHelper } from '../admin'

export const goldStandardProductHelper = {
  medicationLabel,
  medications,
  ndc9,
  productId
}

function medicationLabel(goldStandardProduct) {
  medications = goldStandardProductHelper.medications(goldStandardProduct)

  return medicationHelper.label(medicationByNdc9(medications, goldStandardProductHelper.ndc9(goldStandardProduct)))

  function medicationByNdc9(medications, ndc9) {
    if (!valueHelper.isValue(medications) || medications.size == 0) {
      return
    }

    const medication = medications.find((m) => medicationHelper.productNdc(m) == ndc9)
    if (valueHelper.isValue(medication)) {
      return medication
    }

    return medications[0]
  }
}

function medications(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'medications')
}

function ndc9(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'ndc9')
}

function productId(goldStandardProduct) {
  return fieldHelper.getField(goldStandardProduct, 'product_id')
}
