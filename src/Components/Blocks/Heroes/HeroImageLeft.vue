<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="grid grid-cols-12 space-y-8">
                    <div class="col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 space-y-8">
                        <h1 class="text-3xl md:text-4xl font-bold">
                            {{ block.data.title }}
                        </h1>
                        <h2 class="text-xl md:text-2xl">
                            {{ block.data.subtitle }}
                        </h2>
                        <a :href="block.data.buttonLink" target="_blank" class="btn btn-error btn-lg px-12 text-lg md:text-xl mx-auto md:ml-0">
                            {{ block.data.buttonText }}
                        </a>
                    </div>
                    <div class="col-span-12 md:col-span-5 order-1 md:order-2 pb-12 md:pb-0">
                        <img :src="block.data.imageUrl" class="max-w-xs max-h-96 block mx-auto" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroImageLeft',
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
