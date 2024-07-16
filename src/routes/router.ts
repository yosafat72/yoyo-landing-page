import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HomePage.vue'),
        meta: {
            title: 'Home - KKP Yoyo Lukasa',
            description: 'Beranda Kantor Konsultan Pajak Yoyo Lukasa, penyedia layanan konsultasi pajak profesional di Tangerang.',
            keywords: 'konsultan pajak, layanan pajak, konsultasi pajak Tangerang'
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('../pages/NotFoundPage.vue'),
        meta: {
            title: '404 Not Found - KKP Yoyo Lukasa',
            description: 'Halaman tidak ditemukan di KKP Yoyo Lukasa.',
            keywords: '404, halaman tidak ditemukan'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
