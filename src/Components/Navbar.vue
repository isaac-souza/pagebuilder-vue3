<template>
    <div class="navbar mb-2 shadow-lg">
        <div class="flex-none px-2 mx-2">
            <span class="text-lg font-bold">
                EZ LandingPage
            </span>
        </div>
        <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
                <router-link :to="{name: 'Dashboard'}" class="btn btn-ghost rounded-btn">
                    Dashboard
                </router-link>
            </div>
            <div class="items-stretch hidden lg:flex">
                <router-link :to="{name: 'ImageGallery'}" class="btn btn-ghost rounded-btn">
                    Image Gallery
                </router-link>
            </div>
        </div>
        <div class="flex justify-end">
            <button @click="logout()" class="btn btn-ghost">
                Logout
            </button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useRouter } from 'vue-router'
    
    import Api from '../Utils/api'

    export default defineComponent({
        name: 'Navbar',
        setup() {
            const router = useRouter()

            const logout = () => {
                Api.logout()
                    .then(() => {
                        router.push({name: 'Login'})
                    })
            }

            return { logout }
        },
    })
</script>
