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
        }
        catch (error) {
            return false
        }
    },

    fetchLandingPages: () => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('/api/v1/landing-pages')
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
            
        })
    },

    fetchLandingPage: async (uuid) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/landing-pages/' + uuid)

            return response.data.data
        }
        catch (error) {
            return null
        }
    },

    fetchAccount: async () => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.get('/api/v1/auth/account')

            return response.data.data
        }
        catch (error) {
            return null
        }
    },

    updateMainPage: async (uuid, data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.put('/api/v1/landing-pages/' + uuid, {pages: data})

            return response.data
        }
        catch (error) {
            return null
        }
    },

    updateDraft: async (uuid, data) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.put('/api/v1/landing-pages/' + uuid + '/draft', {pages: data})

            return response.data
        }
        catch (error) {
            return null
        }
    },

    deleteLandingPage: async (uuid) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            const response = await axios.delete('/api/v1/landing-pages/' + uuid)

            if(response.status == 204) {
                return true
            }

            return false
        }
        catch (error) {
            return false
        }
    },

    createLandingPage: (data) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/api/v1/landing-pages', data)
                        .then(response => {
                            resolve(response.data)
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}

export default Api
