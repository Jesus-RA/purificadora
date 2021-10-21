// export const myMutation = ( state ) => {

// }

export const setUser = ( state, user ) => {
    state.admin = user
}

export const setError = ( state, { error, message } ) => {
    state.error = error
    state.errorMessage = message
}

export const setLoading = ( state, value ) => {
    state.isLoading = value
}