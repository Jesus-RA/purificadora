export const setProfileData = ( state, { name, lastname, phone, address } ) => {
    state.name = name
    state.lastname = lastname
    state.phone = phone
    state.address = address
}