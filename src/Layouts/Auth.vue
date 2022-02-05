<template>
    <div>
        <div class="h-screen flex">
            <div class="flex w-full md:w-3/6 lg:2/6 justify-center items-center bg-white">
                <div class="bg-white">
                    <slot/>
                </div>
            </div>
            <div class="hidden md:flex w-full md:w-3/6 lg:4/6 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
                <div>
                    <h1 class="text-white font-bold text-4xl font-sans">EZ Landing Page</h1>
                    <p class="text-white mt-2">The easiest way to create a sleek landing page for your digital product.</p>
                    <button class="btn btn-outline btn-accent mt-3">Read More</button>
                </div>
            </div>
        </div>
        <BreakPointHelper/>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import BreakPointHelper from '../Components/BreakPointHelper.vue'

    export default defineComponent({
        name: 'AuthLayout',
        components: {
            BreakPointHelper
        },
        setup() {
            
        },
    })
</script>
