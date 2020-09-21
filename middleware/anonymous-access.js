export default function ({ store, redirect }) {
  console.log('[Middleware Anonym]',store.state.auth)
  if (store.state.auth) {
    return redirect('/home')
  }
}
