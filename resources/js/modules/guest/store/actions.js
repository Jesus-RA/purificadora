import axios from "axios"

export const loadLandingContent = async ( { commit } ) => {

    try{

        commit('setLoading', true, { root: true })

        const { data } = await axios.get('/landing-content')
        commit('setLandingContent', data)

    }catch(error){
        console.table(error)
    }finally{
        commit('setLoading', false, { root: true })
    }

}