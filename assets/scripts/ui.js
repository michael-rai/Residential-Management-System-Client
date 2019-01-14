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

const signInSuccess = data => {
  store.user = data.user
  document.getElementById('main-nav').hidden = false
  $('#signInModal').modal('toggle')
  $('alert').alert()
  console.log('sign-in success')
  $('#reg-sucess').text('Signed up successfully. You may now  sign-in.')
  $('#message1').removeClass()
  $('#message1').addClass('success')
}

const signInFailure = data => {
  console.log('sign-in failure')
  // $('#reg-sucess').text('You are unable to register. Please contact Administrator.')
  // $('#message1').removeClass()
  // $('#message1').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
