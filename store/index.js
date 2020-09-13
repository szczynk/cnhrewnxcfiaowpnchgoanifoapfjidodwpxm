import { auth, StoreDB } from '~/plugins/firebase.js'
// import profile from './modules/profile'

export const state = () => ({
  uid: '',
  user: ''
})
        

    // modules: {
    //     profile: profile,
    // },

export const getters = {    
  uid(state) {
    if (state.user && state.user.id) return state.user.id
    else return null
  },

  user(state) {
    return state.user
  },

  isAuthenticated(state) {
    return !!state.user && !!state.user.id
  }
}

export const mutations = {
  setUser(state, payload) {
    console.log('[STORE MUTATIONS] - setUSER:', payload)
    state.user = payload
  },

  saveUID(state, payload) {
    console.log('[STORE MUTATIONS] - saveUID:', payload)
    state.uid = payload;
  }
}

export const actions = {
  async signUp({ dispatch }, { firstName, lastName, email, password }) {
    // sign user up
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    var userRef = StoreDB.collection('users').doc(user.uid)
    // create user object in userCollections
    await userRef.set({
      id: user.uid,
      photo_url: '',
      firstName: firstName,
      lastName: lastName,
      city: 'Jakarta',
      latest_jobplace: 'NetZAP',
      latest_jobtitle: 'Customer Service',
      phone_number: '+62812345678901',
      email: user.email,
      about_me: 'Help Me Please',
      video_url: '',
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
    // fetch user profile
    var userRef = StoreDB.collection('users').doc(user.uid)
    const userTab = await userRef.get()
    // set user profile in state
    commit('setUser', userTab.data())
    commit('saveUID', user.uid);
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
        phone_number: user.phone_number
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

  async addWorkExperience({ dispatch }, {name, company, date, duration, description}) {
    const userId = auth.currentUser.uid
    var userRef = StoreDB.collection('users').doc(userId)
    // update user object
    await userRef.collection('work_experience').add({
      name: name,
      company: company,
      date: date,
      duration: duration,
      description: description
    })

    dispatch('fetchUserTab', { uid: userId })
  },

  async signOut({ commit }) {
    // log user out
    console.log('[STORE ACTIONS] - logout')
    await auth.signOut()

    // clear user data from state
    commit('setUser', null)
    commit('saveUID', null)
  }
}
