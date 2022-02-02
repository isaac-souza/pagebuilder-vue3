import { createStore } from 'vuex';
import Api from './api'

import {
    MUTATION_SET_LANDING_PAGES,
    MUTATION_ADD_LANDING_PAGE,
    MUTATION_DELETE_LANDING_PAGE,
    MUTATION_UPDATE_LANDING_PAGE,

    MUTATION_SET_ALERT,
} from './mutation-types'

import {
    ACTION_GET_LANDING_PAGES,
    ACTION_GET_LANDING_PAGE_BY_SLUG,
    ACTION_DELETE_LANDING_PAGE,
    ACTION_CREATE_LANDING_PAGE,
    ACTION_UPDATE_DRAFT,
    ACTION_UPDATE_PAGES,

    ACTION_DISMISS_ALERT,
    ACTION_SHOW_ALERT,
} from './action-types'

export default createStore({
    state() {
        return {
            landingPages: null,
            alert: {
                show: false,
                type: null,
                message: null
            }
        }
    },

    mutations: {
        [MUTATION_SET_LANDING_PAGES](state, payload) {
            state.landingPages = payload.landingPages
        },

        [MUTATION_ADD_LANDING_PAGE](state, payload) {
            state.landingPages.push(payload.landingPage)
        },

        [MUTATION_DELETE_LANDING_PAGE](state, payload) {
            let index = state.landingPages.findIndex(landingPage => landingPage.uuid == payload.uuid)
            state.landingPages.splice(index, 1)
        },

        [MUTATION_UPDATE_LANDING_PAGE](state, payload) {
            let index = state.landingPages.findIndex(landingPage => landingPage.uuid == payload.landingPage.uuid)
            state.landingPages[index] = payload.landingPage
        },

        [MUTATION_SET_ALERT](state, payload) {
            state.alert = payload.alert
        },
    },

    getters: {
        findLandingPage: (state) => (uuid) => {
            if(state.landingPages == null) {
                return null
            }

            return state.landingPages.find(landingPage => landingPage.uuid == uuid)
        },
    },

    actions: {
        [ACTION_GET_LANDING_PAGES]: (context) => {
            return new Promise((resolve, reject) => {
                if(context.state.landingPages == null) {
                    Api.fetchLandingPages()
                        .then(response => {
                            context.commit(MUTATION_SET_LANDING_PAGES, { landingPages: response.data })
                            resolve(response)
                        })
                        .catch(error => {
                            reject(error)
                        })
                }
            })
        },

        [ACTION_DELETE_LANDING_PAGE]: (context, uuid) => {
            return new Promise((resolve, reject) => {
                Api.deleteLandingPage(uuid)
                    .then(response => {
                        context.commit(MUTATION_DELETE_LANDING_PAGE, { uuid: uuid })
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        [ACTION_CREATE_LANDING_PAGE]: (context, data) => {
            return new Promise((resolve, reject) => {
                Api.createLandingPage(data)
                    .then(response => {
                        if(context.state.landingPages == null) {
                            context.dispatch(ACTION_GET_LANDING_PAGES)
                                .then(() => {
                                    context.commit(MUTATION_ADD_LANDING_PAGE, { landingPage: response.data })
                                    resolve(response)
                                })
                                .catch(error => {
                                    reject(error)
                                })
                        }
                        else {
                            context.commit(MUTATION_ADD_LANDING_PAGE, { landingPage: response.data })
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        [ACTION_UPDATE_DRAFT]: (context, data) => {
            return new Promise((resolve, reject) => {
                Api.updateDraft(data.uuid, data.draft)
                    .then(response => {
                        if(context.state.landingPages == null) {
                            context.dispatch(ACTION_GET_LANDING_PAGES)
                                .then(() => {
                                    context.commit(MUTATION_UPDATE_LANDING_PAGE, { landingPage: response.data })
                                    resolve(response)
                                })
                                .catch(error => {
                                    reject(error)
                                })
                        }
                        else {
                            context.commit(MUTATION_UPDATE_LANDING_PAGE, { landingPage: response.data })
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        [ACTION_UPDATE_PAGES]: (context, data) => {
            return new Promise((resolve, reject) => {
                Api.updatePages(data.uuid, data.pages)
                    .then(response => {
                        if(context.state.landingPages == null) {
                            context.dispatch(ACTION_GET_LANDING_PAGES)
                                .then(() => {
                                    context.commit(MUTATION_UPDATE_LANDING_PAGE, { landingPage: response.data })
                                    resolve(response)
                                })
                                .catch(error => {
                                    reject(error)
                                })
                        }
                        else {
                            context.commit(MUTATION_UPDATE_LANDING_PAGE, { landingPage: response.data })
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        [ACTION_GET_LANDING_PAGE_BY_SLUG]: (context, slug) => {
            return new Promise((resolve, reject) => {
                Api.getLandingPageBySlug(slug)
                    .then(response => {
                        resolve(response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        [ACTION_DISMISS_ALERT]: (context) => {
            context.commit(MUTATION_SET_ALERT, {
                alert: {
                    show: false,
                    type: null,
                    message: null
                }
            })
        },

        [ACTION_SHOW_ALERT]: (context, data) => {
            context.commit(MUTATION_SET_ALERT, {
                alert: {
                    show: true,
                    type: data.type,
                    message: data.message
                }
            })
        },
    }
})
