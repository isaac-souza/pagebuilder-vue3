<template>
    <details class="px-2 py-1 border border-gray-300 rounded-lg">
        <summary class="text-sm">
            Select an image
        </summary>
        <div class="grid grid-cols-12">
            <div v-for="image in store.state.images" :key="image.uuid" class="col-span-12 lg:col-span-6 flex items-center justify-center">
                <img @click="select(image)" :src="image.thumbUrl" class="py-4 block mx-auto w-20 h-auto">
            </div>
        </div>
        <a href="/app/image-gallery" target="_blank" class="flex items-center justify-center my-4">
            <span class="text-info text-xs text-center uppercase font-medium mr-1">Open the gallery</span>
            <Icon name="external-link" styles="w-4 h-4 text-info"/>
        </a>
    </details>
</template>

<script>
    import { defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'

    import { ACTION_GET_IMAGES } from '../Utils/action-types'

    import Icon from '../Components/Icon.vue'

    export default defineComponent({
        name: 'ImageSelect',
        emits: ['update:modelValue'],
        components: {
            Icon,
        },
        props: {
            modelValue: {
                type: String,
                default: () => ({}),
            }
        },
        setup(props, context) {
            const store = useStore()

            const select = (image) => {
                context.emit('update:modelValue', image.url)
            }

            onMounted(() => {
                if(store.state.images == null) {
                    store.dispatch(ACTION_GET_IMAGES)
                }
            })

            return { store, select }
        }
    })
</script>
