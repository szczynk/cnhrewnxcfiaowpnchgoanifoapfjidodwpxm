// ~/plugins/fireauth.js

import { auth } from '~/plugins/firebase.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {

      // here is you would want to build your user
      // object, but for now, we'll just take everything

      if (user) {
        store.dispatch('fetchUserTab', user)
        console.log('got user', user);
        resolve(true);
      }
      else {
        // No user is signed in.
        resolve(false);
      }
    })
  })
}