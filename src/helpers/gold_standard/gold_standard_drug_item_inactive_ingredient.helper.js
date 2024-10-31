import { fieldHelper, idHelper, modelDatesHelper } from '../'
import { goldStandardDrugItemHelper } from './gold_standard_drug_item.helper'
import { goldStandardIngredientHelper } from './gold_standard_ingredient.helper'

export const goldStandardDrugItemInactiveIngredientHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  goldStandardDrugItem,
  goldStandardDrugItemId,
  goldStandardDrugItemNameLong,
  goldStandardIngredient,
  goldStandardIngredientId,
  goldStandardIngredient,
  goldStandardIngredientName,
  label,
  perVolume,
  perVolumeUnitCode,
  strength,
  strengthUnitCode,
}

function canDelete(_goldStandardDrugItemInactiveIngredient) {
  return false
}

function canEdit(_goldStandardDrugItemInactiveIngredient) {
  return false
}

function goldStandardDrugItem(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "drug_item")
}

function goldStandardDrugItemId(goldStandardDrugItemInactiveIngredient) {
  return idHelper.associatedId(
    goldStandardDrugItemInactiveIngredient,
    "drug_item",
    goldStandardDrugItemInactiveIngredientHelper,
    "goldStandardDrugItem",
    "drug_item_id"
  )
}

function goldStandardDrugItemNameLong(goldStandardDrugItemInactiveIngredient) {
  return goldStandardDrugItemHelper.itemNameLong(
    goldStandardDrugItemInactiveIngredientHelper.goldStandardDrugItem(goldStandardDrugItemInactiveIngredient)
  )
}

function goldStandardIngredient(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "ingredient")
}

function goldStandardIngredientId(goldStandardDrugItemInactiveIngredient) {
  return idHelper.associatedId(
    goldStandardDrugItemInactiveIngredient,
    "ingredient",
    goldStandardDrugItemInactiveIngredientHelper,
    "goldStandardIngredient",
    "ingredient_id"
  )
}

function goldStandardIngredientName(goldStandardDrugItemInactiveIngredient) {
  return goldStandardIngredientHelper.ingredientName(
    goldStandardDrugItemInactiveIngredientHelper.goldStandardIngredient(goldStandardDrugItemInactiveIngredient)
  )
}

function label(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "label")
}

function perVolume(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "per_volume")
}

function perVolumeUnitCode(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "per_volume_unit_code")
}

function strength(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "strength")
}

function strengthUnitCode(goldStandardDrugItemInactiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemInactiveIngredient, "strength_unit_code")
}
