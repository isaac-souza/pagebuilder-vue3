<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="space-y-8">
                    <div class="text-3xl md:text-4xl font-bold mb-8 md:mb-16">
                        {{ block.data.title }}
                    </div>
                    <div class="grid grid-cols-12 md:gap-8 space-x-0 space-y-8 md:space-x-0 md:space-y-0">
                        <div v-for="item in block.data.list" :key="item.uuid" class="col-span-12 md:col-span-4 space-y-1">
                            <Icon name="check-circle" :class="{'text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}" class="w-6 h-6"/>
                            <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}" class="text-lg md:text-2xl font-medium">
                                {{ item.title }}
                            </div>
                            <p class="font-light break-words">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import Icon from '../../../Components/Icon.vue'

    export default defineComponent({
        name: 'FeaturesGrid3',
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
