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

    let profileUpdated

    try{

        const user_id = rootState.authModule.user.id
        await axios.put(`/profiles/${ user_id }`, data)

        profileUpdated = true

        dispatch('loadProfileData')

    }catch(error){
        profileUpdated = false
    }

    return profileUpdated

}

export const loadUserOrders = async ({ commit, rootState }, { from = null, to = null }) => {

    try{

        commit('setLoading', true, { root: true })

        const user_id = rootState.authModule.user.id
        const { data } = await axios.get(`/orders/user/${ user_id }?from=${ from }&to=${ to }`)

        commit('setOrders', data.orders)
        commit('setOrdersQuantity', data.quantity)
        commit('setOrdersTotal', data.total)

    }catch(error){
        console.table(error)
    }
    finally{
        commit('setLoading', false, { root: true })
    }

}

export const searchOrders = async ({ commit, rootState }, { from, to }) => {

    try{
        
    }catch(error){

    }

}