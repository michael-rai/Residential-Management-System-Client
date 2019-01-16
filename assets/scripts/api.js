const config = require('./config.js')
const store = require('./store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const pwChange = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const maintTix = data => {
  return $.ajax({
    url: config.apiUrl + '/newticket',
    method: 'POST',
    data
  })
}

const viewMaintTix = data => {
  return $.ajax({
    url: config.apiUrl + '/tickets',
    method: 'GET',
    data
  })
}

const showMaintTix = data => {
  return $.ajax({
    url: config.apiUrl + '/tickets/:id',
    method: 'GET',
    data
  })
}

const showEdit = data => {
  return $.ajax({
    url: config.apiUrl + `/tickets/${data.id}`,
    method: 'GET',
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  pwChange,
  viewMaintTix,
  maintTix,
  showMaintTix,
  showEdit
}
