<template>
    <MarketingLayout>
        <div class="hero min-h-screen bg-base-200">
            <div class="flex-col hero-content lg:flex-row-reverse">
                <img src="https://picsum.photos/id/1005/600/600" class="max-w-sm rounded-lg shadow-2xl" loading="lazy"> 
                <div>
                    <h1 class="mb-5 text-4xl font-bold">
                        The easiest way to create beautiful landing pages
                    </h1> 
                    <p class="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> 
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </MarketingLayout>
</template>

<script>
    import { defineComponent } from 'vue'
    import MarketingLayout from '../../../Layouts/Marketing.vue'

    export default defineComponent({
        name: 'WebsiteHome',
        components: {
            MarketingLayout,
        },
        setup() {
            
        },
    })
</script>
