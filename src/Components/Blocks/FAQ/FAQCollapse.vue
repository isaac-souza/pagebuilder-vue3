<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:py-12': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="space-y-12 text-center">
                    <h1 class="max-w-3xl text-3xl md:text-4xl font-bold mx-auto">
                        {{ block.data.title }}
                    </h1>
                </div>
                <div class="max-w-3xl mx-auto mt-16 space-y-4">
                    <div v-for="faq in block.data.list" :key="faq.uuid" class="collapse border rounded-xl border-base-300 collapse-arrow">
                        <input type="checkbox">
                        <div class="collapse-title text-xl font-medium">
                            {{ faq.question }}
                        </div>
                        <div class="collapse-content">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
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
