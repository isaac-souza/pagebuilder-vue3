import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost'

const Api = {
    login: async (credentials) => {
        try {
            await axios.get('/sanctum/csrf-cookie')

            const response = await axios.post('/login', credentials)

            if(response.status == 200) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    logout: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/logout')

            return true
        }
        catch (error) {
            return false
        }
    },

    register: async (data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')

            const response = await axios.post('/register', data)

            console.log(response)

            if(response.status == 200) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    isAuthenticated: async () => {
        await axios.get('/sanctum/csrf-cookie')
            
        try {
            const response = await axios.get('/api/auth-check')
            return response.data.authenticated
        } catch (error) {
            return false
        }
    }
}

export default Api
