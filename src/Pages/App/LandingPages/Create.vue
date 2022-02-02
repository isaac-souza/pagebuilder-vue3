<template>
    <AppLayout>
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <h2 class="text-2xl font-normal text-gray-600">New landing page</h2>
        </div>
        
        <div class="card card-bordered border-gray-200">
            <div class="card-body">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-6">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label> 
                            <input v-model="form.name" type="text" placeholder="My awesome ebook" class="input input-bordered text-base">
                        </div>
                    </div>
                    <div class="col-span-12 flex justify-end">
                        <button @click="submit()" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'

    import { ACTION_CREATE_LANDING_PAGE } from '../../../Utils/action-types'

    import AppLayout from '../../../Layouts/App.vue'

    export default defineComponent({
        name: 'CreateLandingPage',
        components: {
            AppLayout,
        },
        setup() {
            const store = useStore()
            const router = useRouter()

            const easyMode = ref(true)
            const form = ref({
                name: null
            })

            const submit = () => {
                store.dispatch(ACTION_CREATE_LANDING_PAGE, form.value)
                    .then(() => {
                        router.push({name: 'Dashboard'})
                    })
                    .catch(error => {
                        // 
                    })
            }

            return { easyMode, submit, form }
        },
    })
</script>
