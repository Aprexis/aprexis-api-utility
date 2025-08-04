import { fieldHelper, idHelper, modelDatesHelper } from '../index.js'
import { goldStandardDrugItemHelper } from './gold_standard_drug_item.helper.js'
import { goldStandardIngredientHelper } from './gold_standard_ingredient.helper.js'

export const goldStandardDrugItemActiveIngredientHelper = {
  ...modelDatesHelper,
  baseEquivalent,
  canDelete,
  canEdit,
  dilutionDenominator,
  dilutionNumerator,
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

function baseEquivalent(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "base_equivalent")
}

function canDelete(_goldStandardDrugItemActiveIngredient) {
  return false
}

function canEdit(_goldStandardDrugItemActiveIngredient) {
  return false
}

function dilutionDenominator(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "dilution_denominator")
}

function dilutionNumerator(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "dilution_numerator")
}

function goldStandardDrugItem(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "drug_item")
}

function goldStandardDrugItemId(goldStandardDrugItemActiveIngredient) {
  return idHelper.associatedId(
    goldStandardDrugItemActiveIngredient,
    "drug_item",
    goldStandardDrugItemActiveIngredientHelper,
    "goldStandardDrugItem",
    "drug_item_id"
  )
}

function goldStandardDrugItemNameLong(goldStandardDrugItemActiveIngredient) {
  return goldStandardDrugItemHelper.itemNameLong(
    goldStandardDrugItemActiveIngredientHelper.goldStandardDrugItem(goldStandardDrugItemActiveIngredient)
  )
}

function goldStandardIngredient(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "ingredient")
}

function goldStandardIngredientId(goldStandardDrugItemActiveIngredient) {
  return idHelper.associatedId(
    goldStandardDrugItemActiveIngredient,
    "ingredient",
    goldStandardDrugItemActiveIngredientHelper,
    "goldStandardIngredient",
    "ingredient_id"
  )
}

function goldStandardIngredientName(goldStandardDrugItemActiveIngredient) {
  return goldStandardIngredientHelper.ingredientName(
    goldStandardDrugItemActiveIngredientHelper.goldStandardIngredient(goldStandardDrugItemActiveIngredient)
  )
}

function label(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "label")
}

function perVolume(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "per_volume")
}

function perVolumeUnitCode(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "per_volume_unit_code")
}

function strength(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "strength")
}

function strengthUnitCode(goldStandardDrugItemActiveIngredient) {
  return fieldHelper.getField(goldStandardDrugItemActiveIngredient, "strength_unit_code")
}

