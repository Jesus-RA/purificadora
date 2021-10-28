import clientGuard from './client-guard';

export default {
    beforeEnter: clientGuard,
    component: () => import('../layouts/ClientLayout.vue'),
    children: [
        {
            path: 'profile',
            name: 'client-profile',
            component: () => import('../pages/ClientPage.vue')
        }
    ]
}