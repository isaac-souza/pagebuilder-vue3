<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:py-12': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="space-y-12 text-center">
                    <h1 class="max-w-3xl text-3xl md:text-4xl font-bold mx-auto flex flex-col md:flex-row items-center justify-center">
                        <Icon styles="w-7 h-7" name="question"/>
                        <span class="ml-2">{{ block.data.title }}</span>
                    </h1>
                </div>
                <div class="max-w-3xl mx-auto mt-16 space-y-4">
                    <div v-for="faq in block.data.list" :key="faq.uuid" class="collapse border rounded-xl border-base-300 collapse-arrow">
                        <input type="checkbox">
                        <div class="collapse-title text-lg md:text-2xl font-medium">
                            {{ faq.question }}
                        </div>
                        <div class="collapse-content text-base md:text-lg font-light">
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
    import Icon from '../../Icon.vue'

    export default defineComponent({
        name: 'FAQCollapse',
        components: {
            Icon,
        },
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
