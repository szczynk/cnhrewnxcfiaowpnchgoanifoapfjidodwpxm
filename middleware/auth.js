export default function ({ store, redirect }) {
  let auth = store.state.isAuthenticated
  console.log('MIDDLEWARE AUTH', auth)
  if (!auth) {
    return redirect('/login')
  }
}
  