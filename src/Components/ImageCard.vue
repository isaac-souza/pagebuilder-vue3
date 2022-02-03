<template>
    <div class="border border-gray-300 p-1 rounded-md">
        <img :src="image.thumbUrl" class="block mx-auto h-24 w-auto">
        <p class="text-sm text-gray-600">{{ nameClipped }}</p>
        <div class="flex justify-end mt-1">
            <button @click="remove()" class="btn btn-sm btn-square btn-ghost">
                <Icon name="trash" class="text-red-500 w-5 h-5"/>
            </button>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    
    import { ACTION_DELETE_IMAGE, ACTION_SHOW_ALERT } from '../Utils/action-types'

    import Icon from './Icon.vue'

    export default defineComponent({
        name: 'ImageCard',
        components: {
            Icon,
        },
        props: {
            image: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const store = useStore()
            
            const nameClipped = computed(() => {
                if(props.image.filename.length > 15) {
                    return props.image.filename.substr(0, 15) + '...'
                }

                return props.image.filename
            })

            const remove = () => {
                store.dispatch(ACTION_DELETE_IMAGE, props.image.uuid)
                    .then(response => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'success',
                            message: 'Image successfully deleted!'
                        })
                    })
                    .catch(error => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'error',
                            message: 'Error while trying to delete the image.'
                        })
                    })
            }

            return { remove, nameClipped }
        },
    })
</script>

