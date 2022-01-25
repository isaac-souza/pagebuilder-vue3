<template>
    <div class="navbar mb-2 shadow-lg">
        <div class="flex-none px-2 mx-2">
            <span class="text-lg font-bold">
                EZ LandingPage
            </span>
        </div> 
        <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
                <router-link to="/app" class="btn btn-ghost rounded-btn">
                    Dashboard
                </router-link> 
            </div>
        </div>
        <div class="flex justify-end">
            <button @click="logout()" class="btn btn-ghost">
                Logout
            </button>
        </div> 
    </div>

    <slot/>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import Api from '../Utils/api'

    export default defineComponent({
        name: 'AppLayout',
        setup() {
            const router = useRouter()

            const logout = async () => {
                const result = await Api.logout()

                if(result) {
                    router.push('/login')
                }
            }

            return { logout }
        },
    })
</script>
