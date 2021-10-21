import Vue from 'vue'
import VueRouter from 'vue-router'

import guestModule from '../modules/guest/router'
import adminModule from '../modules/admin/router'

Vue.use( VueRouter )

const routes = [
    {
        path: '/',
        ...guestModule
    },
    {
        path: '/admin',
        ...adminModule
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router