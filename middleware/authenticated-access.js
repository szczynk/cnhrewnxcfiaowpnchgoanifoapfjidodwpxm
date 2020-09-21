import Cookies from 'js-cookie'

export default function ({ store, redirect }) {
  console.log('[Middleware Auth]',Cookies.getJSON('auth'))
  console.log('[Middleware Auth]',!store.state.auth)
  if (!store.state.auth) {
    return redirect('/login')
  }
}