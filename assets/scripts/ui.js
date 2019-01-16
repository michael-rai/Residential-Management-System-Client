const store = require('./store.js')

// Sign up sucess and failures
const signUpSuccess = data => {
  console.log('registration success')
  $('#reg-sucess').text('Signed up successfully. You may now  sign-in.')
  $('#message1').removeClass()
  $('#message1').addClass('success')
}

const signUpFailure = data => {
  console.log('registration failure')
  $('#reg-sucess').text('You are unable to register. Please contact Administrator.')
  $('#message1').removeClass()
  $('#message1').addClass('failure')
}

// sign in success and failures
const signInSuccess = data => {
  store.user = data.user
  document.getElementById('main-nav').hidden = false
  document.getElementById('main-view').hidden = false
  document.getElementById('prelogMsg').hidden = true
  document.getElementById('regSignButtons').hidden = true
  $('#signInModal').modal('toggle')
  $('#alert1').fadeIn(500)
  console.log('sign-in success')
  $('#alert1').text('Signed In Successfully')
  $('#alert1').fadeOut(5000)
  $('#message1').removeClass()
  $('#message1').addClass('success')
}

const signInFailure = data => {
  console.log('sign-in failure')
  // $('#reg-sucess').text('You are unable to register. Please contact Administrator.')
  // $('#message1').removeClass()
  // $('#message1').addClass('failure')
}

// sign out success and failures
const signOutSuccess = data => {
  document.getElementById('main-nav').hidden = true
  document.getElementById('main-view').hidden = true
  document.getElementById('prelogMsg').hidden = false
  document.getElementById('regSignButtons').hidden = false
  $('#alert1').fadeIn(500)
  $('#alert1').text('Signed out successfully')
  $('#alert1').fadeOut(5000)
  store.user = null
  console.log('signed out successfully')
}

const signOutFailure = (error) => {
  $('#alert1').text('Error on sign out')
  $('#alert1').fadeOut(5000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.log('signOutFailure ran. Error is :', error)
}

// pw change success and failures
const pwChgSuccess = data => {
  console.log('pw change success')
  $('#pwChg-success').text('You have successfully changed your password.')
}

const pwChgFailure = error => {
  console.log('pw change failure', error)
  $('#pwChg-success').text('You are unable to change your password. Please contact Administrator.')
}

// view maintenance index tix success and failures
const viewMaintTixSuccess = data => {
  data.tickets.map(ticket => {
    $('#ticketIndexResponse').text(ticket)
  })
  console.log(data.tickets)
}

// const viewMaintTixFailure = data => {
//   console.log('pw change success')
//   $('#pwChg-success').text('You have successfully changed your password.')
// }

// show maint tix success and failures

const showMaintTixSucess = data => {
  console.log('got to show maint success')
}

const showMaintTixFailure = data => {
  console.log('got to show maint failure')
}

// delete main tix sucess and failures
const delMaintTixSuccess = data => {
  $('#delResult').text('You have successfully deleted the maintenance ticket above.')
  console.log('got to del maint success')
}

const delMaintTixFailure = data => {
  $('#delResult').text('You have not deleted the maintenance ticket above')
  console.log('got to del maint failure')
}

// show edit success and failures
const showEditSuccess = data => {
  document.getElementById('searchResults').hidden = false
  console.log(data)
}

const showEditFailure = error => {
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  pwChgSuccess,
  pwChgFailure,
  viewMaintTixSuccess,
  showMaintTixSucess,
  showMaintTixFailure,
  delMaintTixSuccess,
  delMaintTixFailure,
  showEditSuccess,
  showEditFailure
}
