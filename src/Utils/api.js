import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL

const Api = {
    fetchLandingPages: () => {
        return request('GET', '/v1/landing-pages')
    },

    getLandingPage: (uuid) => {
        return request('GET', '/v1/landing-pages/' + uuid)
    },

    getLandingPageBySlug: (slug) => {
        return request('GET', '/v1/public/landing-pages/' + slug)
    },

    updatePages: (uuid, data) => {
        return request('PUT', '/v1/public/landing-pages/' + uuid, {pages: data})
    },

    updateDraft: (uuid, data) => {
        return request('PUT', '/v1/landing-pages/' + uuid + '/draft', {pages: data})
    },

    deleteLandingPage: (uuid) => {
        return request('DELETE', '/v1/landing-pages/' + uuid)
    },

    createLandingPage: (data) => {
        return request('POST', '/v1/landing-pages', data)
    },

    getImages: () => {
        return request('GET', '/v1/images')
    },

    uploadImage: (data) => {
        return request('POST', '/v1/images', data)
    },

    deleteImage: (uuid) => {
        return request('DELETE', '/v1/images' + uuid)
    },

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

function request(method, endpoint, data = null, raw = false) {
    if(method == 'GET') {
        return new Promise((resolve, reject) => {
            axios.get(endpoint)
                .then(response => {
                    log(response, 'GET - then - ' + endpoint)

                    if(raw) {
                        resolve(response)
                    }
                    else {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    log(error, 'GET - catch - ' + endpoint)
                    reject(error)
                })
        })
    }

    if(method == 'POST') {
        return new Promise((resolve, reject) => {
            axios.post(endpoint, data)
                .then(response => {
                    log(response, 'POST - then - ' + endpoint)

                    if(raw) {
                        resolve(response)
                    }
                    else {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    log(error, 'POST - catch - ' + endpoint)
                    reject(error)
                })
        })
    }

    if(method == 'PUT') {
        return new Promise((resolve, reject) => {
            axios.put(endpoint, data)
                .then(response => {
                    log(response, 'PUT - then - ' + endpoint)

                    if(raw) {
                        resolve(response)
                    }
                    else {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    log(error, 'PUT - catch - ' + endpoint)
                    reject(error)
                })
        })
    }

    if(method == 'DELETE') {
        return new Promise((resolve, reject) => {
            axios.delete(endpoint)
                .then(response => {
                    log(response, 'DELETE - then - ' + endpoint)

                    if(raw) {
                        resolve(response)
                    }
                    else {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    log(error, 'DELETE - catch - ' + endpoint)
                    reject(error)
                })
        })
    }
}

function log(data, description) {
    if(import.meta.env.VITE_APP_DEBUG == 'true') {
        console.log(description)
        console.log(data)
    }
}

export default Api
