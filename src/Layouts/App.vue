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
            <div class="items-stretch hidden lg:flex">
                <router-link to="/app/integrations" class="btn btn-ghost rounded-btn">
                    Integrations
                </router-link> 
            </div>
        </div>
        <div class="flex justify-end">
            <button @click="logout()" class="btn btn-ghost">
                Logout
            </button>
        </div> 
    </div>

    <div class="max-w-5xl mx-auto py-8 space-y-4">
        <slot/>
    </div>

    <BreakPointHelper/>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    import Api from '../Utils/api'
    import BreakPointHelper from '../Components/BreakPointHelper.vue'

    export default defineComponent({
        name: 'AppLayout',
        components: {
            BreakPointHelper
        },
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
