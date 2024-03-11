import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/queue',
            name: 'queue',
            component: () => import('../views/QueuePage.vue')
        },
        {   
            path: '/book',
            name: 'book',
            component: () => import('../views/ClassList.vue')
        },
        {
            path: '/bookyoga',
            name: 'bookyoga',
            component: () => import('../views/BookYoga.vue')
        }
    ]
})

export default router
