<template>
    <AuthLayout>
        <div class="text-center">
            <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Login
            </h1>
            <div class="py-2 text-left">
                <input type="email" class="input input-bordered w-full" placeholder="Email" />
            </div>
            <div class="py-2 text-left">
                <input type="password" class="input input-bordered w-full" placeholder="Password" />
            </div>
            <div class="py-2">
                <button type="submit" class="btn btn-primary btn-block">
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
    import AuthLayout from '../../Layouts/Auth.vue'

    export default {
        name: 'Login',
        components: {
            AuthLayout,
        },
        setup() {
            
        },
    }
</script>
