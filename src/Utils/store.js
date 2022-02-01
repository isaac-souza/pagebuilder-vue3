import { createStore } from 'vuex';
import Api from './api'

import {
    SET_LANDING_PAGES,
    ADD_LANDING_PAGE,
    DELETE_LANDING_PAGE,
} from './mutation-types'

import {
    ACTION_GET_LANDING_PAGES,
    ACTION_DELETE_LANDING_PAGE,
    ACTION_CREATE_LANDING_PAGE,
} from './action-types'

export default createStore({
    state() {
        return {
            landingPages: null
        }
    },

    mutations: {
        [SET_LANDING_PAGES](state, payload) {
            state.landingPages = payload.landingPages
        },

        [ADD_LANDING_PAGE](state, payload) {
            state.landingPages.push(payload.landingPage)
        },

        [DELETE_LANDING_PAGE](state, payload) {
            let index = state.landingPages.findIndex(landingPage => landingPage.uuid == payload.uuid)
            state.landingPages.splice(index, 1)
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
                            context.commit(SET_LANDING_PAGES, { landingPages: response.data })
                            resolve(response)
                        })
                        .catch(error => {
                            reject(error)
                        })
                }
            })
        },

        [ACTION_DELETE_LANDING_PAGE]: async (context, uuid) => {
            const result = await Api.deleteLandingPage(uuid)

            if(result) {
                context.commit(DELETE_LANDING_PAGE, { uuid: uuid })
            }
        },

        [ACTION_CREATE_LANDING_PAGE]: (context, data) => {
            return new Promise((resolve, reject) => {
                Api.createLandingPage(data)
                    .then(response => {
                        if(context.state.landingPages == null) {
                            context.dispatch(ACTION_GET_LANDING_PAGES)
                                .then(() => {
                                    context.commit(ADD_LANDING_PAGE, { landingPage: response.data })
                                    resolve(response)
                                })
                                .catch(error => {
                                    reject(error)
                                })
                        }
                        else {
                            context.commit(ADD_LANDING_PAGE, { landingPage: response.data })
                            resolve(response)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    }
})
