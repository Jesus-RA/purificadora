import CurrencyFormatter from '../../../helpers/CurrencyFormater'

export const setProfileData = ( state, { name, lastname, phone, address } ) => {
    state.name = name
    state.lastname = lastname
    state.phone = phone
    state.address = address
}

export const setOrders = ( state, orders ) => {

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    state.orders = orders.map( ({ date, quantity, total }) => ({
        date: new Date( date ).toLocaleDateString('es-MX', dateOptions),
        quantity,
        total: CurrencyFormatter.format( total )
    })) 
}

export const setOrdersQuantity = ( state, quantity ) => {
    state.ordersQuantity = quantity
}

export const setOrdersTotal = ( state, total ) => {
    state.ordersTotal = CurrencyFormatter.format( total )
}