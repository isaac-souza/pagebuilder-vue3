<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <h1 class="max-w-3xl text-3xl md:text-4xl font-bold">
                    {{ block.data.title }}
                </h1>
                <div class="grid grid-cols-12 mt-0 lg:mt-12">
                    <div class="col-span-12 lg:col-span-5 mt-8 mb-16 lg:mb-0 lg:mt-0 flex items-center justify-center">
                        <img :src="block.data.imageUrl" class="max-w-xs max-h-96" loading="lazy">
                    </div>
                    <div class="col-span-12 lg:col-span-7 flex items-center justify-center">
                        <div class="max-w-3xl mx-auto space-y-4">
                            <div v-for="chapter in block.data.list" :key="chapter.uuid" class="collapse border rounded-xl border-base-300 collapse-arrow">
                                <input type="checkbox">
                                <div class="collapse-title text-base lg:text-lg font-normal">
                                    {{ chapter.title }}
                                </div>
                                <div class="collapse-content text-base md:text-lg font-light">
                                    <p>{{ chapter.description }}</p>
                                </div>
                            </div>
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
        name: 'ChaptersCollapse',
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
