import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL

const Api = {
    login: (credentials) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/login', credentials)
                        .then(response => {
                            if(response.status == 200) {
                                localStorage.setItem('ez_landingpage_authenticated', true)
                            }

                            resolve(response)
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

    logout: () => {
        return new Promise((resolve, reject) => {
            axios.post('/logout')
                .then(() => {
                    localStorage.setItem('ez_landingpage_authenticated', false)
                    resolve()
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    register: (data) => {
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/register', data)
                        .then(response => {
                            if(response.status == 200) {
                                localStorage.setItem('ez_landingpage_authenticated', true)
                            }

                            resolve(response)
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

    fetchLandingPages: () => {
        return new Promise((resolve, reject) => {
            axios.get('/v1/landing-pages')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    getLandingPage: (uuid) => {
        return new Promise((resolve, reject) => {
            axios.get('/v1/landing-pages/' + uuid)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    getLandingPageBySlug: (slug) => {
        return new Promise((resolve, reject) => {
            axios.get('/v1/public/landing-pages/' + slug)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    fetchAccount: () => {
        return new Promise((resolve, reject) => {
            axios.get('/v1/auth/account')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    updatePages: (uuid, data) => {
        return new Promise((resolve, reject) => {
            axios.put('/v1/landing-pages/' + uuid, {pages: data})
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    updateDraft: (uuid, data) => {
        return new Promise((resolve, reject) => {
            axios.put('/v1/landing-pages/' + uuid + '/draft', {pages: data})
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    deleteLandingPage: (uuid) => {
        return new Promise((resolve, reject) => {
            axios.delete('/v1/landing-pages/' + uuid)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    createLandingPage: (data) => {
        return new Promise((resolve, reject) => {
            axios.post('/v1/landing-pages', data)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    getImages: () => {
        return new Promise((resolve, reject) => {
            axios.get('/v1/images')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    uploadImage: (data) => {
        return new Promise((resolve, reject) => {
            axios.post('/v1/images/', data)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    deleteImage: (uuid) => {
        return new Promise((resolve, reject) => {
            axios.delete('/v1/images/' + uuid)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}

export default Api
