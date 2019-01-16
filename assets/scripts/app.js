'use strict'

// use require with a reference to bundle the file and use it in this file
const events = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./events.js')

$(() => {
  $('#regisForm').on('submit', events.onRegister)
  $('#signInForm').on('submit', events.onSignIn)
  $('#logout').on('click', events.onSignOut)
  $('#pwChgForm').on('submit', events.onPwChange)
  $('#sendMaintTix').on('submit', events.onSendMaintTix)
  $('#launchTixIndex').on('click', events.onViewMaintTix)
  $('#launchTixShow').on('click', events.onShowMaintTix)
  $('#launchTixDelete').on('click', events.onDelMaintTix)
})
