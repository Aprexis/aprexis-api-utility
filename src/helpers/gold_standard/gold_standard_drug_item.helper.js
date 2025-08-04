import { fieldHelper, idHelper, modelDatesHelper } from '../index.js'
import { goldStandardGsFormHelper } from './gold_standard_gs_form.helper.js'
import { goldStandardProductHelper } from './gold_standard_product.helper.js'

export const goldStandardDrugItemHelper = {
  ...modelDatesHelper,
  canDelete,
  canEdit,
  drugItemId,
  goldStandardFdaForm,
  goldStandardFdaFormId,
  goldStandardGsForm,
  goldStandardGsFormId,
  goldStandardGsFormName,
  goldStandardImplicitRoute,
  goldStandardImplicitRouteId,
  goldStandardProduct,
  goldStandardProductId,
  goldStandardProductNameLong,
  goldStandardProductNameShort,
  goldStandardSpecificDrugItem,
  goldStandardSpecificDrugItemId,
  itemNameLong
}

function canDelete(_goldStandardDrugItem) {
  return false
}

function canEdit(_goldStandardDrugItem) {
  return false
}

function drugItemId(goldStandardDrugItem) {
  return idHelper.id(goldStandardDrugItem, "drug_item_id")
}

function goldStandardFdaForm(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, "fda_form")
}

function goldStandardFdaFormId(goldStandardDrugItem) {
  return idHelper.associatedId(
    goldStandardDrugItem,
    "fda_form",
    goldStandardDrugItemHelper,
    "goldStandardGsForm",
    "fda_form_id"
  )
}

function goldStandardGsForm(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, "gs_form")
}

function goldStandardGsFormId(goldStandardDrugItem) {
  return idHelper.associatedId(
    goldStandardDrugItem,
    "gs_form",
    goldStandardDrugItemHelper,
    "goldStandardGsForm",
    "gs_form_id"
  )
}

function goldStandardGsFormName(goldStandardDrugItem) {
  return goldStandardGsFormHelper.formName(
    goldStandardDrugItemHelper.goldStandardGsForm(goldStandardDrugItem)
  )
}

function goldStandardImplicitRoute(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, "implicit_route")
}

function goldStandardImplicitRouteId(goldStandardDrugItem) {
  return idHelper.associatedId(
    goldStandardDrugItem,
    "implicit_route",
    goldStandardDrugItemHelper,
    "goldStandardGsForm",
    "implicit_route_id"
  )
}

function goldStandardProduct(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, 'product')
}

function goldStandardProductId(goldStandardDrugItem) {
  return idHelper.associatedId(
    goldStandardDrugItem,
    'product',
    goldStandardDrugItemHelper,
    "goldStandardProduct",
    "product_id"
  )
}

function goldStandardProductNameLong(goldStandardDrugItem) {
  return goldStandardProductHelper.productNameLong(
    goldStandardDrugItemHelper.goldStandardProduct(goldStandardDrugItem)
  )
}

function goldStandardProductNameShort(goldStandardDrugItem) {
  return goldStandardProductHelper.productNameShort(
    goldStandardDrugItemHelper.goldStandardProduct(goldStandardDrugItem)
  )
}

function goldStandardSpecificDrugItem(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, "specific_drug_item")
}

function goldStandardSpecificDrugItemId(goldStandardDrugItem) {
  return idHelper.associatedId(
    goldStandardDrugItem,
    "specific_drug_item",
    goldStandardDrugItemHelper,
    "goldStandardGsForm",
    "specific_drug_item_id"
  )
}

function itemNameLong(goldStandardDrugItem) {
  return fieldHelper.getField(goldStandardDrugItem, 'item_name_long')
}
