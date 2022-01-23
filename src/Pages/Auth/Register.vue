<template>
    <AuthLayout>
        <div class="text-center">
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Create account
            </h1>
            <div class="py-2 text-left">
                <input v-model="form.name" type="text" class="input input-bordered w-full" placeholder="Name"/>
            </div>
            <div class="py-2 text-left">
                <input v-model="form.email" type="email" class="input input-bordered w-full" placeholder="Email"/>
            </div>
            <div class="py-2 text-left">
                <input v-model="form.password" type="password" class="input input-bordered w-full" placeholder="Password"/>
            </div>
            <div class="py-2 text-left">
                <input v-model="form.password_confirmation" type="password" class="input input-bordered w-full" placeholder="Password confirmation"/>
            </div>
            <div v-if="error" class="text-red-500 text-sm text-center w-full p-4 bg-red-100 rounded-md">
                Registration error, please check your data and try again.
            </div>
            <div class="py-2">
                <button v-if="processing" disabled class="btn btn-primary btn-block loading disabled">
                    Creating your account...
                </button>
                <button v-else @click="submit()" type="submit" class="btn btn-primary btn-block">
                    Create account
                </button>
            </div>
        </div>
        <div class="text-center mt-12">
            <span>
                Already have an account?
            </span>
            <router-link to="/login" class="text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Sing in</router-link>
        </div>
    </AuthLayout>

    <div class="pb-12"></div>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import Api from '../../Utils/api'
    import AuthLayout from '../../Layouts/Auth.vue'

    export default defineComponent({
        name: 'Login',
        components: {
            AuthLayout,
        },
        setup() {
            const processing = ref(false)
            const error = ref(false)
            const router = useRouter()

            const form = ref({
                name: 'Isaac Souza',
                email: 'isaacsouza17@gmail.com',
                password: 'asdfasdf',
                password_confirmation: 'asdfasdf',
            })

            const submit = async () => {
                processing.value = true
                error.value = false

                const result = await Api.register(form.value)

                if(result) {
                    processing.value = false
                    router.push({name: 'Dashboard'})
                }
                else {
                    error.value = true
                }

                processing.value = false
            }

            return { form, submit, processing, error }
        },
    })
</script>
