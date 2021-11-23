import axios from "axios"

export const loadLandingContent = async ( { commit } ) => {

    try{

        commit('setLoading', true, { root: true })

        const { data } = await axios.get('/landing-content')

        const gallery_images = data.gallery_images.split(',').map( image => image.replaceAll('\n', ''))
        const companyData = { ...data, gallery_images: gallery_images}

        commit('setLandingContent', companyData)

    }catch(error){
        console.table(error)
    }finally{
        commit('setLoading', false, { root: true })
    }

}