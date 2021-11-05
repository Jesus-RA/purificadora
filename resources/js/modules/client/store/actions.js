import axios from "axios"

export const loadProfileData = async ( { commit, rootState } ) => {

    try{

        commit('setLoading', true, { root: true })

        const user_id = rootState.authModule.user.id
        const { data } = await axios.get(`/profiles/${ user_id }`)

        commit('setLoading', false, { root: true })

        commit('setProfileData', {
            name: data.name,
            lastname: data.lastname,
            phone: data.phone,
            address: data.address,
        })

    }catch(error){
        console.table(error)
    }

}

export const updateProfileData = async ( { commit, dispatch, state, rootState }, data ) => {

    try{
        commit('setLoading', true, { root: true })

        const user_id = rootState.authModule.user.id
        await axios.get(`/profiles/${ user_id }`)

        commit('setLoading', false, { root: true })

        dispatch('loadProfileData')

    }catch(error){
        console.table(error)
    }

}