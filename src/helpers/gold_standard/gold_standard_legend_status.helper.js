import { fieldHelper, idHelper } from "../"

export const goldStandardLegendStatusHelper = {
  legendStatusId,
  statusName
}

function legendStatusId(goldStandardLegendStatus) {
  return idHelper.id(goldStandardLegendStatus, "legend_status_id")
}

function statusName(goldStandardLegendStatus) {
  return fieldHelper.getField(goldStandardLegendStatus, "status_name")
}
