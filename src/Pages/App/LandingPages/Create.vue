<template>
    <AppLayout>
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <div>
                <h2 class="text-2xl font-normal text-gray-600">New landing page</h2>
            </div>
        </div>
        
        <div class="card card-bordered border-gray-200">
            <div class="card-body">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label> 
                            <input type="text" placeholder="My awesome ebook" class="input input-bordered text-base">
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label> 
                            <select class="select select-bordered w-full text-base font-normal">
                                <option disabled="disabled" selected="selected">Select a page type</option> 
                                <option>Ebook</option> 
                                <option>Course</option> 
                                <option>Lead capture</option>
                            </select>
                        </div>
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
                        console.log(error)
                    })
            }

            return { easyMode, submit, form }
        },
    })
</script>

