const profile = {
    state: () => ({
        profile: '',
    }),

    mutations: {
        setProfile(state, payload) {
            state.profile = payload
        }
    },

    actions: {},
    

}

module.exports = profile