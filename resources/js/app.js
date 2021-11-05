require('./bootstrap');
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { abilitiesPlugin } from '@casl/vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(abilitiesPlugin, store.getters['authModule/userAbilities'])
Vue.use(VueSweetalert2)

import store from './store'
import router from './router'

import App from './App.vue'

window.Vue = require('vue').default;

const app = new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});