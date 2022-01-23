<template>
    <AuthLayout>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered">
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered">
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered">
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Password confirmation</span>
            </label>
            <input type="text" placeholder="username" class="input input-bordered">
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
