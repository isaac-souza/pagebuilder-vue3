<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="text-center space-y-12">
                    <h1 class="max-w-3xl text-4xl md:text-5xl font-bold mx-auto">
                        {{ block.data.title }}
                    </h1>
                    <p class="max-w-3xl font-light text-lg mx-auto">
                        {{ block.data.subtitle }}
                    </p>
                    <div class="">
                        <a :href="block.data.buttonLink" target="_blank" class="btn btn-error btn-lg px-12 text-lg md:text-3xl">
                            {{ block.data.buttonText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BuySimple',
        props: {
            block: {
                type: Object,
                required: true
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            
        },
    })
</script>
