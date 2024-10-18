import { fieldHelper, idHelper } from "../"

export const goldStandardBrandGenericStatusHelper = {
  brandGenericStatusId,
  statusName
}

function brandGenericStatusId(goldStandardBrandGenericStatus) {
  return idHelper.id(goldStandardBrandGenericStatus, "brand_generic_status_id")
}

function statusName(goldStandardBrandGenericStatus) {
  return fieldHelper.getField(goldStandardBrandGenericStatus, "status_name")
}
