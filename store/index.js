import { auth, StoreDB } from '~/plugins/firebase.js'
// import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// const ls = new SecureLS({ encodingType: 'aes', encryptionSecret: process.env.SECRETVUEX, isCompression: false });
// import profile from './modules/profile'
// import Cookies from 'js-cookie';
// import VuexPersistence from 'vuex-persist'

// const vuexPersist = new VuexPersistence({
//   key: 'isAuthenticated',
//   reducer: (state) => ({ isAuthenticated: state.isAuthenticated }),
// })



export const state = () => ({
  // uid: '',
  user: '',
  isAuthenticated: false
})
        

    // modules: {
    //     profile: profile,
    // },

// export const plugins = [
//   // createPersistedState({
//   //   storage: {
//   //     paths: ['user', 'isAuthenticated'],
//   //     getItem: key => Cookies.getJSON(key),
//   //     setItem: (key, state) => Cookies.set(key, state, { expires: 3, secure: true }),
//   //     removeItem: key => Cookies.remove(key)
//   //   }
//   // })
//   // // createPersistedState()
//   // vuexPersist.plugin
// ]

export const getters = {    
  // uid(state) {
  //   if (state.user && state.user.id) return state.user.id
  //   else return null
  // },

  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user 
  }
}

export const mutations = {
  setUser(state, payload) {
    console.log('[STORE MUTATIONS] - setUSER:', payload)
    state.user = payload
  },

  // saveUID(state, payload) {
  //   console.log('[STORE MUTATIONS] - saveUID:', payload)
  //   state.uid = payload;
  // },

  isAuthenticated(state, payload) {
    console.log('[STORE MUTATIONS] - isAuthenticated:', payload)
    state.isAuthenticated = payload;
  }
}

export const actions = {
  async signUpUser({ dispatch }, { firstName, lastName, email, password }) {
    // sign user up
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    // create user object in userCollections
    var userRef = StoreDB.collection('users').doc(user.uid)
    await userRef.set({
      id: user.uid,
      photo_url: '',
      firstName: firstName,
      lastName: lastName,
      city: '',
      latest_jobplace: '',
      latest_jobtitle: '',
      phone_number: '',
      email: user.email,
      about_me: '',
      video_url: '',
      role: 'user',
      status: 'unemployed',
      facebook: '',
      twitter: '',
      instagram: '',
      github: '',
      youtube: '',
      site: '',
    })

    // fetch user profile and set in state
    dispatch('fetchUserTab', user)
  },

  async signUpRecruiter({ dispatch }, { firstName, lastName, email, password, company, industry }) {
    // sign user up
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    // create user object in userCollections
    var userRef = StoreDB.collection('users').doc(user.uid)
    await userRef.set({
      id: user.uid,
      photo_url: '',
      firstName: firstName,
      lastName: lastName,
      city: '',
      company: company,
      industry: industry,
      phone_number: '',
      website: '',
      email: user.email,
      address: '',
      lat: 0,
      lng: 0,
      about_me: '',
      video_url: '',
      role: 'recruiter',
    })

    // fetch user profile and set in state
    dispatch('fetchUserTab', user)
  },

  async signInWithEmail({ dispatch }, { email, password }) {
    // sign user in
    const { user } = await auth.signInWithEmailAndPassword(email, password)

    // fetch user profile and set in state
    dispatch('fetchUserTab', user)
  },

  async fetchUserTab({ commit }, user) {
    console.log('fetchUser', user)
    // fetch user profile
    var userRef = StoreDB.collection('users').doc(user.uid)
    const userTab = await userRef.get()
    // set user profile in state
    commit('setUser', userTab.data())
    // commit('saveUID', user.uid);
    commit('isAuthenticated', true);
    console.log('[STORE ACTIONS] - in login, response:', status)
    
    // change route to dashboard
    // if (router.currentRoute.path === '/login') {
    //     router.push('/home')
    // }
  },

  async updateProfileCard({ dispatch }, user) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.update({
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        latest_jobplace: user.latest_jobplace,
        latest_jobtitle: user.latest_jobtitle,
        phone_number: user.phone_number,
        email: user.email,
        photo_url: user.photo_url,
    })

    dispatch('fetchUserTab', { uid: userId })
  },

  async updateCompaniesProfileCard({ dispatch }, user) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.update({
        company: user.company,
        industry: user.industry,
        city: user.city,
        website: user.website,
        phone_number: user.phone_number,
        email: user.email,
    })

    dispatch('fetchUserTab', { uid: userId })
  },

  async updateAboutMe({ dispatch }, user) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.update({
        about_me: user.about_me
    })

    dispatch('fetchUserTab', { uid: userId })
  },

  async updateSocial({ dispatch }, user) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.update({
        facebook: user.facebook,
        twitter: user.twitter,
        instagram: user.instagram,
        github: user.github,
        youtube: user.youtube,
        site: user.site,
    })

    dispatch('fetchUserTab', { uid: userId })
  },

  async updateAddress({ dispatch }, user) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.update({
        address: user.address,
        lat: user.lat,
        lng: user.lng
    })

    dispatch('fetchUserTab', { uid: userId })
  },
  
  async signOut({ commit }) {
    // log user out
    console.log('[STORE ACTIONS] - logout')
    await auth.signOut()

    // clear user data from state
    commit('setUser', null)
    commit('isAuthenticated', false)
  }
}
