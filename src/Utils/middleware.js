import axios from 'axios'
import Api from './api'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost'

const Middleware = {
    auth: async (to, from, next) => {
        const isAuthenticated = await Api.isAuthenticated()

        if (to.name !== 'Login' && !isAuthenticated) {
            next({ name: 'Login' })
        }
        else {
            next()
        }
    },

    guest: async (to, from, next) => {
        const isAuthenticated = await Api.isAuthenticated()

        if ((to.name == 'Login' || to.name == 'Register') && isAuthenticated) {
            next({ name: 'Dashboard' })
        }
        else {
            next()
        }
    },
}

export default Middleware