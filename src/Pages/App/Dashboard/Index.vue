<template>
    <AppLayout :loading="loading">
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <div>
                <h2 class="text-2xl font-normal text-gray-600">My landing pages</h2>
            </div>
            <div>
                <router-link to="/app/landing-pages/create" class="btn btn-primary">
                    New landing page
                </router-link>
            </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4 p-4 md:p-0">

            <div v-for="landingPage in landingPages" :key="landingPage.uuid" class="col-span-12 md:col-span-4 lg:col-span-3">
                <div class="card card-bordered border border-gray-300">
                    <figure>
                        <img src="https://picsum.photos/id/1005/400/250">
                    </figure> 
                    <div class="card-body p-4">
                        <h2 class="card-title text-base font-normal">{{ landingPage.name }}</h2> 
                        <div class="justify-end card-actions m-0">
                            <a :href="'/' + landingPage.slug" target="_blank" class="btn btn-square btn-sm btn-outline btn-primary">
                                <Icon name="external-link" styles="w-3 h-3"/>
                            </a>
                            <router-link :to="'/app/' + landingPage.uuid + '/builder'" class="btn btn-square btn-sm btn-outline btn-primary">
                                <Icon name="edit" styles="w-3 h-3"/>
                            </router-link>
                            <button class="btn btn-square btn-sm btn-outline btn-error">
                                <Icon name="trash" styles="w-3 h-3"/>
                            </button>
                        </div>
                    </div>
                </div> 
            </div>

        </div>
    </AppLayout>
</template>

<script>
    import { defineComponent, onMounted, ref } from 'vue'
    import Api from '../../../Utils/api'
    import AppLayout from '../../../Layouts/App.vue'
    import Icon from '../../../Components/Icon.vue'

    export default defineComponent({
        name: 'Dashboard',
        components: {
            AppLayout,
            Icon,
        },
        setup() {
            const landingPages = ref({})
            const loading = ref(false)

            onMounted(() => {
                loading.value = true

                Api.fetchLandingPages()
                    .then(result => {
                        landingPages.value = result
                    })

                loading.value = false
            })

            return { loading, landingPages}
        },
    })
</script>
