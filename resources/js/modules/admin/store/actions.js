import axios from "axios"

export const loadOrders = async ({ commit }) => {

    try{

        const { data } = await axios.get('orders')

        const orders = data.map( ({ id, ownerRole, quantity, total }) => ({ id, ownerRole, quantity, total }) )

        commit('setOrders', orders)

    }catch(error){
        console.table(error)
    }

}

export const makeOrder = async ({ dispatch }, order) => {

    let orderHasBeenCreated

    try{

        await axios.post('/orders', order)
        orderHasBeenCreated = true

        await dispatch('loadOrders')

    }catch(error){
        console.table(error)
        orderHasBeenCreated = false
    }

    return orderHasBeenCreated

}

export const fetchProductPrice = async ({ commit }) => {
    
    let productPrice = 0.0

    try{
        const { data } = await axios.get('/product_price')
        productPrice = data.product_price
    }catch(error){
        console.table(error)
    }finally{
        commit('setProductPrice', productPrice)
    }

}