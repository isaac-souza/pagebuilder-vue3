<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="space-y-12 text-center">
                    <h1 class="max-w-3xl text-3xl md:text-4xl font-bold mx-auto">
                        {{ block.data.title }}
                    </h1>
                </div>
                <div class="max-w-3xl mx-auto mt-16 space-y-8">
                    <div v-for="faq in block.data.list" :key="faq.uuid" class="">
                        <div class="text-xl md:text-2xl font-normal">
                            {{ faq.question }}
                        </div>
                        <div :class="{'text-gray-300': block.data.darkMode, 'text-gray-600': !block.data.darkMode}" class="text-gray-600 text-base md:text-lg font-light">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'FAQList',
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
    })
</script>
