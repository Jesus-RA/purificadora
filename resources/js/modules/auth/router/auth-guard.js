import store from '../../../store'

const authGuard = async (,, next) => {

    const isAuthenticated = await store.dispatch('checkAuthentication')

    if( isAuthenticated ) next()

    next({ name: 'login' })
}