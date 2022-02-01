<template>
    <AppLayout>
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <h2 class="text-2xl font-normal text-gray-600">My landing pages</h2>
            <router-link to="/app/landing-pages/create" class="btn btn-primary">
                New landing page
            </router-link>
        </div>
        
        <div class="grid grid-cols-12 gap-4 p-4 md:p-0">
            <div v-for="landingPage in store.state.landingPages" :key="landingPage.uuid" class="col-span-12 md:col-span-4 lg:col-span-3">
                <LandingPageCard :landingPage="landingPage"/>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import { defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { ACTION_GET_LANDING_PAGES } from '../../../Utils/action-types'

    import AppLayout from '../../../Layouts/App.vue'
    import Icon from '../../../Components/Icon.vue'
    import LandingPageCard from './Components/LandingPageCard.vue'

    export default defineComponent({
        name: 'Dashboard',
        components: {
            AppLayout,
            Icon,
            LandingPageCard,
        },
        setup() {
            const store = useStore()

            onMounted(() => {
                store.dispatch(ACTION_GET_LANDING_PAGES)
            })

            return { store }
        },
    })
</script>
