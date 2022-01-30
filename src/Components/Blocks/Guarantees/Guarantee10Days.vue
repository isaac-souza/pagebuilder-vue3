<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="grid grid-cols-12 space-y-8">
                    <div class="col-span-12">
                        <h2 class="text-3xl md:text-4xl font-bold flex items-center">
                            <Icon name="shield" class="w-7 h-7"/>
                            <span class="ml-2">{{ block.data.title }}</span>
                        </h2>
                    </div>
                    <div class="col-span-12">
                        <div class="grid grid-cols-12 items-center space-y-8">
                            <div class="col-span-12 md:col-span-5 order-1 md:order-2">
                                <img :src="block.data.imageUrl" class="block mx-auto max-h-72 max-w-fit p-6 md:p-2" loading="lazy">
                            </div>
                            <div class="col-span-12 md:col-span-7 order-2 md:order-1">
                                <p class="font-light tracking-wide text-lg break-words">
                                    {{ block.data.description }}
                                </p>
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
    import Icon from '../../Icon.vue'

    export default defineComponent({
        name: 'AuthorImageLeft',
        components: {
            Icon,
        },
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
