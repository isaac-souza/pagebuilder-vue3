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
