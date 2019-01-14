const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onRegister = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onPwChange = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.pwChange(data)
    .then(ui.pwChgSuccess)
    .catch(ui.pwChgFailure)
}

const onSendMaintTix = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.maintTix(data)
    .then(ui.maintTixSuccess)
    .catch(ui.maintTixFailure)
}

module.exports = {
  onRegister,
  onSignIn,
  onSignOut,
  onPwChange,
  onSendMaintTix
}
