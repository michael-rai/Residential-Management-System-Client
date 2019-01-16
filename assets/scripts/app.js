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
  $('#viewMainTix').on('click', events.onViewMaintTix)
  // $('#showTix').on('click', events.onShowMaintTix)
  $('#delTixFormSearch').on('submit', events.onDelSearch)
  $('#showEditTixForm').on('submit', events.onShowEdit)
  $('#searchResults').on('submit', events.onEdit)
})
