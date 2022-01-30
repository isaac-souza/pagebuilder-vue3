<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="space-y-12 text-center">
                    <h1 class="max-w-3xl text-3xl md:text-4xl font-bold mx-auto">
                        {{ block.data.title }}
                    </h1>
                    <div class="grid grid-cols-12">
                        <div class="col-span-12 col-start-1 md:col-span-6 md:col-start-4">
                            <iframe class="aspect-video w-full" :src="'https://www.youtube.com/embed/' + block.data.youtubeVideoCode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <h2 class="max-w-3xl text-xl md:text-2xl mx-auto">
                        {{ block.data.subtitle }}
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroVideoCenter',
        props: {
            block: {
                type: Object,
                required: true,
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            
        },
    }
</script>
