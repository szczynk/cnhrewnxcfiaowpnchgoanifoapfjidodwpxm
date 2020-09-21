const cookieParser = process.server ? require('cookieparser') : undefined
// import JWTDecode from 'jwt-decode'
// import VuexPersistence from 'vuex-persist'
// import Cookies from 'js-cookie'


// const vuexCookie = new VuexPersistence({
//   key: 'auth',
//   restoreState: (key, storage) => Cookies.getJSON(key),
//   saveState: (key, state, storage) =>
//     Cookies.set(key, state, { secure: true })
// })

// export const plugins = [
//   vuexCookie.plugin
// ]

export const state = () => ({
  auth: null
  // if (Cookies.getJSON('auth')) {
  //   return {auth: Cookies.getJSON('auth')}
  // }
  // else {
  //   return {auth: null}
  // }
  // return {
  //   auth:  Cookies.getJSON('auth') ? Cookies.getJSON('auth') : null
  // }
})

export const getters = {
  auth: (state) => {
    return state.auth
  }
}

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      token = parsed.token
    }
    // const decoded = JWTDecode(token)
    // console.log('decoded',decoded)
    commit('setAuth', token)
  },
  setAuth ({ commit }, user) {
    if (!user) {
      commit('setAuth', null)
      cookies
      document.cookie = 'token=;expires=0;SameSite=Lax'
    } else {
      user.getIdToken().then((token) => {
        commit('setAuth', token)
        const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days.
        document.cookie = 'token=' + token + ';max-age=' + expiresIn + ';SameSite=Lax'
        // return null
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error getting ID token.', error)
        commit('setAuth', null)
        document.cookie = 'token=;expires=0;SameSite=Lax'
      })
    }
  }
}
