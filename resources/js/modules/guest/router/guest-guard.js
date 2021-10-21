import store from '../../../store'

const guestGuard = async (_,from, next) => {

    const isAuthenticated = await store.dispatch('checkAuthenticated')

    if( !isAuthenticated ) next()

    next(from.path)
}

export default guestGuard