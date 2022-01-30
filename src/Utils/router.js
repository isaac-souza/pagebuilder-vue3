import { createRouter, createWebHistory } from 'vue-router'

import middleware from './middleware'

import Login from '../Pages/Auth/Login.vue'
import Register from '../Pages/Auth/Register.vue'

import App from '../Pages/App/App.vue'
import Dashboard from '../Pages/App/Dashboard/Index.vue'

import PageBuilder from '../Pages/App/PageBuilder/Builder.vue'
import PagePreview from '../Pages/App/PageBuilder/Preview.vue'

import CreateLandingPage from '../Pages/App/LandingPages/Create.vue'

import WebsiteHome from '../Pages/Marketing/Home.vue'
import WebsitePricing from '../Pages/Marketing/Pricing.vue'
import WebsiteContact from '../Pages/Marketing/Contact.vue'

const routes = [
    //
    // Website routes
    //
    {
        path: '/',
        name: 'WebsiteHome',
        component: WebsiteHome,    
    },
    {
        path: '/pricing',
        name: 'WebsitePricing',
        component: WebsitePricing,    
    },
    {
        path: '/contact',
        name: 'WebsiteContact',
        component: WebsiteContact,    
    },

    //
    // Authentication routes
    //
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            return middleware.guest(to, from, next)
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            return middleware.guest(to, from, next)
        }
    },

    //
    // App routes
    //
    {
        path: '/app',
        name: 'App',
        component: App,
        beforeEnter: (to, from, next) => {
            return middleware.auth(to, from, next)
        },
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
                beforeEnter: (to, from, next) => {
                    return middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/landing-pages/create',
                name: 'CreateLandingPage',
                component: CreateLandingPage,
                beforeEnter: (to, from, next) => {
                    return middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/builder/:uuid/:type',
                name: 'PageBuilder',
                component: PageBuilder,
                beforeEnter: (to, from, next) => {
                    return middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/preview/:uuid/:type',
                name: 'PagePreview',
                component: PagePreview,
                beforeEnter: (to, from, next) => {
                    return middleware.auth(to, from, next)
                },
            },
        ],
    },
]

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default Router
