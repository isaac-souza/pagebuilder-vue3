<template>
    <div class="card card-bordered border border-gray-300">
        <figure>
            <img src="https://picsum.photos/id/1005/400/250" loading="lazy">
        </figure> 
        <div class="card-body p-4">
            <h2 class="card-title text-base font-normal m-0 p-0">{{ landingPage.name }}</h2> 
            <div class="justify-end card-actions m-0 p-0">
                <a :href="'/' + landingPage.slug" target="_blank" class="btn btn-square btn-sm btn-outline btn-primary">
                    <Icon name="external-link" styles="w-3 h-3"/>
                </a>
                <router-link :to="'/app/builder/' + landingPage.uuid + '/main'" class="btn btn-square btn-sm btn-outline btn-primary">
                    <Icon name="edit" styles="w-3 h-3"/>
                </router-link>
                <button v-if="removing" class="btn btn-square btn-sm btn-error disabled loading"></button>
                <button v-else @click="remove()" class="btn btn-square btn-sm btn-outline btn-error">
                    <Icon name="trash" styles="w-3 h-3"/>
                </button>
            </div>
        </div>
    </div> 
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useStore } from 'vuex'

    import { 
        ACTION_DELETE_LANDING_PAGE,
        ACTION_SHOW_ALERT
    } from '../../../../Utils/action-types'

    import Icon from '../../../../Components/Icon.vue'

    export default defineComponent({
        name: 'LandingPageCard',
        components: {
            Icon,
        },
        props: {
            landingPage: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const store = useStore()
            const removing = ref(false)

            const remove = () => {
                removing.value = true
                
                store.dispatch(ACTION_DELETE_LANDING_PAGE, props.landingPage.uuid)
                    .then(() => {
                        removing.value = false
                        store.dispatch(ACTION_SHOW_ALERT, { type: 'success', message: 'Página excluida com sucesso!' })
                    })
                    .catch(() => {
                        removing.value = false
                        store.dispatch(ACTION_SHOW_ALERT, { type: 'error', message: 'Problema ao tentar excluir a página, tente novamente.' })
                    })
            }

            return { remove, removing }
        },
    })
</script>
