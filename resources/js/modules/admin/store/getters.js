export const getOrdersData = ( state ) => {

    const ordersData = state.orders.reduce( (ordersData, { ownerRole, quantity, total }) => {

        const key = ownerRole === 'admin' ? 'admin_orders' : 'client_orders'

        if( ordersData[key] ){

            ordersData[key].quantity += quantity,
            ordersData[key].total += total

        }else{
            ordersData[key] = {
                user_type: ownerRole === 'admin' ? 'Usuarios no registrados' : 'Usuarios registrados',
                quantity,
                total,
            }
        }

        return ordersData

    }, {})

    return ordersData

}

export const getOrdersTotals = ( state ) => {

    const ordersTotals = state.orders.reduce( (orderData, { quantity, total }) => {

        const order = {
            quantity: orderData.quantity + quantity,
            total: orderData.total + total
        }

        return order

    }, { quantity: 0, total: 0 })

    return ordersTotals

}