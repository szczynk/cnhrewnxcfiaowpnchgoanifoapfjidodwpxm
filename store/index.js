import Vuex from 'vuex'
import { googleAuth, auth, StoreDB } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
        user: '',
    },

    getters: {
        user(state) {
            return state.user
        },
    
        isAuthenticated(state) {
            return !!state.user
        }
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },

    actions: {
        async signUp({ dispatch }, { firstName, lastName, email, password }) {
            // sign user up
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            // create user object in userCollections
            await StoreDB.collection('users').doc(user.uid).set({
                firstName: firstName,
                lastName: lastName,
                icon: ''
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
            const userTab = await StoreDB.collection('users').doc(user.uid).get()
        
            // set user profile in state
            commit('setUser', userTab.data())
        
            // change route to dashboard
            // if (router.currentRoute.path === '/login') {
            //     router.push('/home')
            // }
        },
    
        async signOut({ commit }) {
            // log user out
            await auth.signOut()

            // clear user data from state
            commit('setUser', {})
        }
    }
  })
}

export default createStore