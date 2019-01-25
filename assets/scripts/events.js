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
  $('#signin-success').text('Connecting to server...')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  api.getWeather()
    .then(ui.getWeatherSuccess)
    .catch(ui.getWeatherFailure)
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

const onViewMaintTix = event => {
  event.preventDefault()
  document.getElementById('ticketIndexContainer').hidden = false
  api.viewMaintTix()
    .then(ui.viewMaintTixSuccess)
    .catch(ui.viewMaintTixFailure)
}

const onShowMaintTix = event => {
  event.preventDefault()
  // document.getElementById('ticketShowContainer').hidden = false
  api.showMaintTix()
    .then(ui.showMaintTixSuccess)
    .catch(ui.showMaintTixFailure)
}

const onEdit = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.edit(data)
    .then(ui.editTixSuccess)
    .catch(ui.editTixFailure)
}

const onDelSearch = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.delMaintTix(data)
    .then(ui.delMaintTixSuccess)
    .catch(ui.delMaintTixFailure)
}

const onShowEdit = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showEdit(data)
    .then(ui.showEditSuccess)
    .catch(ui.showEditFailure)
}

const onMsgToMgmt = event => {
  event.preventDefault()
  document.getElementById('msgToMgmtContainer').hidden = true
  document.getElementById('cancelBtnHide').hidden = true
  document.getElementById('sendBtnHide').hidden = true
  document.getElementById('closeBtnShow').hidden = false
  $('#msgConfirmation').text('Your message has been sent to the fictional property managment for review.')
}

module.exports = {
  onRegister,
  onSignIn,
  onSignOut,
  onPwChange,
  onSendMaintTix,
  onViewMaintTix,
  onShowMaintTix,
  onEdit,
  onDelSearch,
  onShowEdit,
  onMsgToMgmt
}
