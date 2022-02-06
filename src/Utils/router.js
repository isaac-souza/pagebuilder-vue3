import { createRouter, createWebHistory } from 'vue-router'

import Middleware from './middleware'

import Login from '../Pages/Auth/Login.vue'
import Register from '../Pages/Auth/Register.vue'

import App from '../Pages/App/App.vue'
import Dashboard from '../Pages/App/Dashboard/Index.vue'

import PageBuilder from '../Pages/App/PageBuilder/Builder.vue'
import PagePreview from '../Pages/App/PageBuilder/Preview.vue'
import PageView from '../Pages/Public/LandingPage/View.vue'

import CreateLandingPage from '../Pages/App/LandingPages/Create.vue'

import ImageGallery from '../Pages/App/ImageGallery/Index.vue'

import WebsiteHome from '../Pages/Public/Marketing/Home.vue'

const routes = [
    //
    // Website routes
    //
    {
        path: '/',
        name: 'WebsiteHome',
        component: WebsiteHome,    
    },

    //
    // Authentication routes
    //
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            return Middleware.guest(to, from, next)
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            return Middleware.guest(to, from, next)
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
            return Middleware.auth(to, from, next)
        },
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: Dashboard,
                beforeEnter: (to, from, next) => {
                    return Middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/landing-pages/create',
                name: 'CreateLandingPage',
                component: CreateLandingPage,
                beforeEnter: (to, from, next) => {
                    return Middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/builder/:uuid/:type',
                name: 'PageBuilder',
                component: PageBuilder,
                beforeEnter: (to, from, next) => {
                    return Middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/preview/:uuid/:type',
                name: 'PagePreview',
                component: PagePreview,
                beforeEnter: (to, from, next) => {
                    return Middleware.auth(to, from, next)
                },
            },
            {
                path: '/app/image-gallery',
                name: 'ImageGallery',
                component: ImageGallery,
                beforeEnter: (to, from, next) => {
                    return Middleware.auth(to, from, next)
                },
            },
        ],
    },

    //
    // Public landing pages
    //
    {
        path: '/:slug',
        name: 'PageView',
        component: PageView,
    }
]

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default Router
