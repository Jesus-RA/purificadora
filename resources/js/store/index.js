import Vue from 'vue'
import Vuex from 'vuex'

import authModule from '../modules/auth/store'
import clientModule from '../modules/client/store'

Vue.use( Vuex )

const store = new Vuex.Store({
    state: {
        isLoading: false,
    },
    mutations: {
        setLoading(state, value){
            state.isLoading = value
        }
    },
    modules: {
        authModule,
        clientModule
    }
})

export default store