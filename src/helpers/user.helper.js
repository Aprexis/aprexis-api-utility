import { valueHelper } from './value.helper.js'
import { fieldHelper } from './field.helper.js'
import { idHelper } from './id.helper.js'
import { userRoles } from '../types/user_roles.type.js'
import { contactHelper } from './contact.helper.js'
import { nameHelper } from './name.helper.js'
import { modelConfigsHelper } from './model_configs.helper.js'
import { modelDatesHelper } from './model_dates.helper.js'

export const userHelper = {
  ...idHelper,
  ...valueHelper.filterHash(nameHelper, { excludeKeys: ['name'] }),
  ...valueHelper.filterHash(contactHelper, { excludeKeys: ['keys'] }),
  ...modelConfigsHelper,
  ...modelDatesHelper,
  canDelete,
  canEdit,
  canHaveNpi,
  canIndexAll,
  canModifyUsers,
  displayRole,
  forHealthPlan,
  forPharmacyStore,
  fullName,
  getCurrentUser,
  hasRole,
  healthPlans,
  isAccessLocked,
  isExpired,
  isLoginAllowed,
  label,
  patient,
  patientId,
  pharmacistDisplay,
  pharmacistNPI,
  pharmacyChains,
  pharmacyStores,
  role,
  rolesToOptions,
  state,
  timeZone,
  username
}

function canDelete(_currentUser, _user) {
  return false
}

function canEdit(_currentUser, _user) {
  return false
}

function canHaveNpi(user) {
  return userRoles[userHelper.role(user)].has_npi
}

function canIndexAll(user) {
  return userHelper.hasRole(user, ['aprexis_admin', 'aprexis_observer', 'aprexis_user_admin'])
}

function canModifyUsers(user) {
  return userHelper.hasRole(
    user,
    ['aprexis_admin', 'aprexis_user_admin', 'health_plan_admin', 'pharmacy_chain_admin', 'pharmacy_store_admin']
  )
}

function displayRole(user) {
  return userRoles[userHelper.role(user)].label
}

function forHealthPlan(user, healthPlanId) {
  const healthPlans = userHelper.healthPlans(user)
  if (!valueHelper.isValue(healthPlans)) {
    return false
  }

  return valueHelper.isValue(healthPlans.find((healthPlan) => healthPlan.id == healthPlanId))
}

function forPharmacyStore(user, pharmacyStoreId) {
  if (!valueHelper.isValue(pharmacyStoreId)) {
    return true
  }

  const pharmacyStores = userHelper.pharmacyStores(user)

  return valueHelper.isValue(pharmacyStores.find((ps) => ps.id == pharmacyStoreId))
}

function fullName(user) {
  return nameHelper.name(user, 'user')
}

function getCurrentUser() {
  const currentUserJson = sessionStorage.getItem('aprexis-api-ui-current-user')

  return JSON.parse(currentUserJson)
}

function hasRole(user, role) {
  const userRole = userHelper.role(user)

  if (Array.isArray(role)) {
    return role.includes(userRole)
  }

  return userRole == role
}

function healthPlans(user) {
  return fieldHelper.getField(user, 'health_plans')
}

function label(user) {
  const name = userHelper.fullName(user)
  if (!userHelper.hasRole(['pharmacy_store_admin', 'pharmacy_store_user']) || !userHelper.canHaveNpi(user)) {
    return name
  }

  return `${name} (${userHelper.pharmacistNPI(user)})`
}

function isAccessLocked(user) {
  return valueHelper.isSet(fieldHelper.getField(user, 'access_locked'))
}

function isExpired(user) {
  return valueHelper.isSet(fieldHelper.getField(user, 'expired'))
}

function isLoginAllowed(user) {
  return valueHelper.isSet(fieldHelper.getField(user, 'allow_login'))
}

function patient(user) {
  return fieldHelper.getField(user, 'patient')
}

function patientId(user) {
  return idHelper.associatedId(user, 'patient', userHelper)
}

function pharmacistDisplay(user) {
  if (userHelper.hasRole(user, ['pharmacy_store_admin', 'pharmacy_store_user'])) {
    return '(no pharmacist)'
  }

  return `${userHelper.fullName(user)} - #${userHelper.pharmacistNPI(user)}`
}

function pharmacistNPI(user) {
  return fieldHelper.getField(user, 'pharmacist_npi')
}

function pharmacyChains(user) {
  return fieldHelper.getField(user, 'pharmacies')
}

function pharmacyStores(user) {
  return fieldHelper.getField(user, 'pharmacy_stores')
}

function role(user) {
  return fieldHelper.getField(user, 'role')
}

function rolesToOptions() {
  return Object.keys(userRoles).map(
    (key) => {
      return {
        id: key,
        value: userRoles[key].label
      }
    }
  )
}

function state(user) {
  return fieldHelper.getField(user, 'state')
}

function timeZone(user) {
  return fieldHelper.getField(user, 'time_zone')
}

function username(user) {
  return fieldHelper.getField(user, 'username')
}
