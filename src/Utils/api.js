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

            if(response.status == 201) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    isAuthenticated: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/auth/check')
            
            return response.data.authenticated
        } catch (error) {
            return false
        }
    },

    fetchLandingPages: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/landing-pages')

            return response.data.data
        } catch (error) {
            return null
        }
    },

    fetchLandingPage: async (uuid) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/landing-pages/' + uuid)

            return response.data.data
        } catch (error) {
            return null
        }
    },

    fetchAccount: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/auth/account')

            return response.data.data
        } catch (error) {
            return null
        }
    },

    updateLandingPage: async (uuid, data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.put('/api/v1/landing-pages/' + uuid, {pages: data})

            return response.data
        } catch (error) {
            return null
        }
    },

    updateDraft: async (uuid, data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.put('/api/v1/landing-pages/' + uuid + '/draft', {pages: data})

            return response.data
        } catch (error) {
            return null
        }
    }
}

export default Api
