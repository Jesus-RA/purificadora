import axios from "axios"

export const login = async ( { commit }, user ) => {

    commit('setLoading', true)

    const res = await axios.post('/login', user)
        .then( ({ data }) => {

            commit('setLoading', false)
            commit('setUser', data)
            commit('setError', { error: false, message: '' })

            return true

        })
        .catch( ({ response }) => {

            commit('setLoading', false)

            if(response.status == 401){
                commit('setError', { error: true, message: response.data.error })
            }

            return false

        } )

    console.log('about to return, user registered')
    console.log(res)
    return res

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