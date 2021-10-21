export default {
    name: 'client',
    component: () => import('../layouts/ClientLayout.vue'),
    children: [
        {
            path: '',
            component: () => import('../pages/ClientPage.vue')
        }
    ]
}