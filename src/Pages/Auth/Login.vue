<template>
    <AuthLayout>
        <div class="text-center space-y-2">
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Login
            </h1>
            <div class="py-2 text-left">
                <input v-model="form.email" type="email" class="input input-bordered w-full" placeholder="Email" />
            </div>
            <div class="py-2 text-left">
                <input v-model="form.password" type="password" class="input input-bordered w-full" placeholder="Password" />
            </div>
            <div v-if="error" class="text-red-500 text-sm text-center w-full p-4 bg-red-100 rounded-md">
                Authentication error, please try again.
            </div>
            <div class="py-2">
                <button v-if="processing" disabled class="btn btn-primary btn-block loading disabled">
                    Checking credentials...
                </button>
                <button v-else @click="submit()" type="submit" class="btn btn-primary btn-block">
                    Login
                </button>
            </div>
        </div>
        <div class="text-center mt-12">
            <span>
                Don't have an account?
            </span>
            <router-link to="/register" class="text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</router-link>
        </div>
    </AuthLayout>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import AuthLayout from '../../Layouts/Auth.vue'
    import Api from '../../Utils/api'

    export default defineComponent({
        name: 'Login',
        components: {
            AuthLayout,
        },
        setup() {
            const router = useRouter()

            const error = ref(false)
            const processing = ref(false)

            const form = ref({
                email: 'justyn57@example.net',
                password: 'password',
            })

            const submit = async () => {
                processing.value = true
                error.value = false

                const result = await Api.login(form.value)

                if(result) {
                    router.push({name: 'Dashboard'})
                }
                else {
                    error.value = true
                }

                processing.value = false
            }

            return { form, submit, error, processing }
        },
    })
</script>
