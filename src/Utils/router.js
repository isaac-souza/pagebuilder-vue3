import { createRouter, createWebHistory } from "vue-router"
import Middleware from './middleware'

import Login from '../Pages/Auth/Login.vue'
import Register from '../Pages/Auth/Register.vue'

import App from '../Pages/App/App.vue'
import Dashboard from '../Pages/App/Dashboard.vue'

import WebsiteHome from '../Pages/Marketing/Home.vue'

const routes = [
    {
        path: '/',
        name: 'WebsiteHome',
        component: WebsiteHome,    
    },
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
            }
        ],
    },
]

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default Router
