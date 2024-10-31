import { fieldHelper, idHelper, modelDatesHelper } from '../'

export const goldStandardIngredientHelper = {
  ...modelDatesHelper,
  baseIngredient,
  baseIngredientId,
  baseIngredientName,
  canDelete,
  canEdit,
  ingredientId,
  ingredientName,
  isBaseIngredient,
  tallmanName
}

function baseIngredient(goldStandardIngredient) {
  return fieldHelper.getField(goldStandardIngredient, "base_ingredient")
}

function baseIngredientId(goldStandardIngredient) {
  return idHelper.associatedId(
    goldStandardIngredient,
    "base_ingredient",
    goldStandardIngredientHelper,
    "baseIngredient",
    "ingredient_id"
  )
}

function baseIngredientName(goldStandardIngredient) {
  return goldStandardIngredientHelper.ingredientName(
    goldStandardIngredientHelper.baseIngredient(goldStandardIngredient)
  )
}

function canDelete(_goldStandardIngredient) {
  return false
}

function canEdit(_goldStandardIngredient) {
  return false
}

function ingredientId(goldStandardIngredient) {
  return idHelper.id(goldStandardIngredient, "ingredient_id")
}

function ingredientName(goldStandardIngredient) {
  return fieldHelper.getField(goldStandardIngredient, "ingredient_name")
}

function isBaseIngredient(goldStandardIngredient) {
  return fieldHelper.getField(goldStandardIngredient, "is_base_ingredient")
}

function tallmanName(goldStandardIngredient) {
  return fieldHelper.getField(goldStandardIngredient, "tallman_name")
}
