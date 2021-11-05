import axios from "axios"
import router from "../../../router"

export const login = async ( { commit }, user ) => {

    let isLogged
    commit('setLoading', true)

    try{
        const { data } = await axios.post('/login', user)

        commit('setUserId', data)
        commit('setError', { error: false, message: '' })

        isLogged = true

    }catch({ response }){
        console.log(response)
        if(response.status == 401){
            commit('setError', { error: true, message: response.data.error })
        }

        isLogged = false

    }finally{
        commit('setLoading', false)
    }

    return isLogged

}

export const register = async ( { commit }, user ) => {

    commit('setLoading', true)

    return await axios.post('/register', user)
        .then( ({ data }) => {

            commit('setLoading', false)
            commit('setUser', data)

            return true
            
        })
        .catch( ({ response }) => {

            commit('setLoading', false)
            console.log(response)

            commit('setError', { error: true, message: response.data.error.message })

            return false

        })

}

export const logout = async ( { commit } ) => {

    const response = await axios.post('/logout')

    if( response.status === 204 ){
        commit('setUserId', { id: null })
        commit('setUserRoleAbilities', { role: null, abilities: [] })
        router.push({ name: 'home' })
    }

}

export const checkRole = async ( { commit } ) => {

    try{
        const { data } = await axios.get('/role-abilities')
        commit('setUserId', { id: data.id })
        commit('setUserRoleAbilities', data)
    }catch({ response }){
        if( response.status === 401 ) router.push({ name: 'login' })
    }

}