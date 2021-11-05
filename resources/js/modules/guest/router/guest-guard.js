import axios from 'axios'
import store from '../../../store'

const guestGuard = async (to,from, next) => {

    let response

    try{
        response = await axios('/role-abilities')
        
    }catch(error){
        response = error.response
    }

    if( response.status === 401 ){
        next()
        return
    }

    next( from.name )
}

export default guestGuard