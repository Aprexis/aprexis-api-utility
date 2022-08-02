import { API } from './api'

export const authenticationApi = {
  signIn,
  signOut
}

function signIn(credentials, username, password, onSuccess, onFailure) {
  const method = 'POST'
  const path = '/users/sign_in'
  const body = {
    user_login: {
      username,
      password
    }
  }

  API.perform(method, path, '', credentials, body, onSuccess, onFailure)
}

function signOut(credentials, onSuccess, onFailure) {
  const method = 'DELETE'
  const path = '/users/sign_out'

  API.perform(method, path, '', credentials, undefined, onSuccess, onFailure)
}
