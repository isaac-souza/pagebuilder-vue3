import { createRouter, createWebHistory } from "vue-router"

import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default Router
