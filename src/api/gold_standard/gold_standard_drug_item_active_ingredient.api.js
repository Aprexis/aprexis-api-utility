import { API } from '../'

export const goldStandardDrugItemActiveIngredientApi = {
  listForDrugItem,
  profileForDrugItem,
  showForDrugItem
}

function listForDrugItem(credentials, drug_item_id, params, onSuccess, onFailure) {
  if (!API.validateId('drug item ID', drug_item_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/drug_items/${drug_item_id}/drug_item_active_ingredients/list`
  API.perform(method, path, API.buildQueryString(params), credentials, undefined, onSuccess, onFailure)
}

function profileForDrugItem(credentials, drug_item_id, ingredient_id, onSuccess, onFailure) {
  if (!API.validateId('drug item ID', drug_item_id, onFailure)) {
    return
  }
  if (!API.validateId('ingredient ID', ingredient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/drug_items/${drug_item_id}/drug_item_active_ingredients/${ingredient_id}/profile`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}

function showForDrugItem(credentials, drug_item_id, ingredient_id, onSuccess, onFailure) {
  if (!API.validateId('drug item ID', drug_item_id, onFailure)) {
    return
  }
  if (!API.validateId('ingredient ID', ingredient_id, onFailure)) {
    return
  }

  const method = 'GET'
  const path = `/gold_standard/drug_items/${drug_item_id}/drug_item_active_ingredients/${ingredient_id}`
  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
