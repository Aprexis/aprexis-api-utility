import { fieldHelper, healthPlanHelper, idHelper, modelDatesHelper } from '../index.js'

export const billingInvoiceHelper = {
  ...idHelper,
  ...modelDatesHelper,
  amount,
  amountPaid,
  canDelete,
  canEdit,
  dueAt,
  healthPlan,
  healthPlanCode,
  healthPlanId,
  healthPlanName,
  name,
  resolvedAt,
  submittedAt
}

function amount(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "amount")
}

function amountPaid(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "amount_paid")
}

function canDelete(_user, _billingInvoice) {
  return false
}

function canEdit(_user, _billingInvoice) {
  return false
}


function dueAt(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "due_at")
}

function healthPlan(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "health_plan")
}

function healthPlanCode(billingInvoice) {
  return healthPlanHelper.code(billingInvoiceHelper.healthPlan(billingInvoice))
}

function healthPlanId(billingInvoice) {
  return idHelper.associatedId(billingInvoice, "health_plan", billingInvoiceHelper)
}

function healthPlanName(billingInvoice) {
  return healthPlanHelper.name(billingInvoiceHelper.healthPlan(billingInvoice))
}

function name(biillingInvoice) {
  return fieldHelper.getField(biillingInvoice, "name")
}

function resolvedAt(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "resolved_at")
}

function submittedAt(billingInvoice) {
  return fieldHelper.getField(billingInvoice, "submitted_at")
}
