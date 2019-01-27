const store = require('./store.js')

// Sign up sucess and failures
const signUpSuccess = data => {
  document.getElementById('regCloseBtnShow').hidden = false
  document.getElementById('regisForm').hidden = true
  $('#reg-success').text('Signed up successfully. You may now  sign-in.')
  $('#message1').removeClass()
  $('#message1').addClass('success')
  $('#regisForm').trigger('reset')
}

const signUpFailure = data => {
  $('#reg-sucess').text('You are unable to register. Please contact Administrator.')
  $('#message1').removeClass()
  $('#message1').addClass('failure')
}

// sign in success and failures
const signInSuccess = data => {
  store.user = data.user
  $('#signin-success').text('Connecting to server...')
  $('#signin-success').text('Signed In Successfully')
  document.getElementById('main-nav').hidden = false
  document.getElementById('ticker').hidden = false
  document.getElementById('main-view').hidden = false
  document.getElementById('prelogMsg').hidden = true
  document.getElementById('regSignButtons').hidden = true
  $('#signInModal').modal('toggle')
  $('#alert1').fadeIn(500)
  $('#signin-success').text('Connecting to server...')
  $('#alert1').text('Signed In Successfully')
  $('#alert1').fadeOut(5000)
  $('#message1').removeClass()
  $('#message1').addClass('success')
  $('#signInForm').trigger('reset')
}
const getWeatherFailure = error => {
  $('#weather').text(error)
}

const getWeatherSuccess = data => {
  let description = ''
  let temp = ''
  data.weather.map(main => {
    description = `${main.description}`
    temp = `${main.temp}`
  })
  $('#temp').html(temp)
  $('#description').html(description)
  console.log(data)
}

const signInFailure = data => {
  $('#signin-success').text('You are unable to sign in. Please check your credentials and try again.')
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
  document.getElementById('ticker').hidden = true
  $('#alert2').fadeIn(500)
  $('#alert2').text('Signed out successfully')
  $('#alert2').fadeOut(5000)
  $('#regisForm').trigger('reset')
  store.user = null
}

const signOutFailure = () => {
  $('#alert1').text('Error on sign out')
  $('#alert1').fadeOut(5000)
  // $('#message').removeClass()
  // $('#message').addClass('failure')
}

// pw change success and failures
const pwChgSuccess = data => {
  $('#pwChg-success').fadeIn(500)
  $('#pwChg-success').text('You have successfully changed your password.')
  $('#pwChg-success').fadeOut(5000)
  $('#pwChgForm').trigger('reset')
}

const pwChgFailure = () => {
  $('#pwChg-success').text('You are unable to change your password. Please contact Administrator.')
  $('.form').trigger('reset')
}

// view maintenance index tix success and failures
const viewMaintTixSuccess = data => {
  let id = ''
  let sub = ''
  let des = ''
  let res = ''
  data.tickets.map(ticket => {
    // tr += `<tr>`;
    // `<th scope="row">${ticket.id}</th>
    // <td>${ticket.subject}</td>
    // <td>${ticket.description}</td>
    // <td>${ticket.resolved}</td>`

    id += `<div class=${ticket.id}>${ticket.id}</div>`
    // id += `<div>`
    sub += `<div class=${ticket.subject}>${ticket.subject}</div>`
    // sub += `<div>`
    des += `<div class=${ticket.description}>${ticket.description}</div>`
    // des += `<div>`
    res += `<div class=${ticket.resolved}>${ticket.resolved}</div>`
    // res += `<div>`
    $('#ticketIndexIdResponse').html(id)
    $('#ticketIndexSubResponse').html(sub)
    $('#ticketIndexDesResponse').html(des)
    $('#ticketIndexResolvedResponse').html(res)
  })
}

// const viewMaintTixFailure = data => {
//   console.log('pw change success')
//   $('#pwChg-success').text('You have successfully changed your password.')
// }

// show maint tix success and failures

const maintTixSuccess = data => {
  $('#sendMaintTix').trigger('reset')
  $('#alert3').text('You have successfully created a maintenance ticket')
  $('#alert3').fadeOut(6000)
}

// const maintTixFailure = data => {
//   console.log('got to show maint failure')
// }
//
// const showMaintTixSucess = data => {
//   console.log('got to show maint success')
// }
//
// const showMaintTixFailure = data => {
//   console.log('got to show maint failure')
// }

// delete main tix sucess and failures
const delMaintTixSuccess = data => {
  $('#delResult').fadeIn(500)
  $('#delResult').text('You have successfully deleted the maintenance ticket above. Changes will reflect on your next sign-in.')
  $('#delResult').fadeOut(5000)
}

const delMaintTixFailure = data => {
  $('#delResult').fadeIn(500)
  $('#delResult').text('You have not deleted the maintenance ticket above')
  $('#delResult').fadeOut(5000)
}

// show edit success and failures
const showEditSuccess = data => {
  document.getElementById('searchResults').hidden = false
  $('#searchMsg').text('Ticket exists, please edit below:')
  console.log(data)
}

const showEditFailure = error => {
  console.log(error)
}

const editTixSuccess = data => {
  $('#editUiMsg').text('You have successfully edited the maintenance ticket above.')
  console.log('got to edit maint success')
}

const editTixFailure = data => {
  $('#editUiMsg').text('You have not edited the maintenance ticket above.')
  console.log('got to edit maint failure')
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
  delMaintTixSuccess,
  delMaintTixFailure,
  showEditSuccess,
  showEditFailure,
  editTixFailure,
  editTixSuccess,
  maintTixSuccess,
  getWeatherSuccess,
  getWeatherFailure
}
