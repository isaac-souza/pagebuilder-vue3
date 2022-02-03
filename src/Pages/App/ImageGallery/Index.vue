<template>
    <AppLayout>
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <h2 class="text-2xl font-normal text-gray-600">Image Gallery</h2>
            <input @input="upload" type="file" class="btn btn-primary" ref="input">
        </div>

        <div class="grid grid-cols-12 gap-4">
            <div v-for="image in store.state.images" :key="image.uuid" class="col-span-6 lg:col-span-2">
                <ImageCard :image="image"/>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import { defineComponent, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'

    import { ACTION_GET_IMAGES, ACTION_SHOW_ALERT, ACTION_UPLOAD_IMAGE } from '../../../Utils/action-types'
    
    import AppLayout from '../../../Layouts/App.vue'
    import Icon from '../../../Components/Icon.vue'
    import ImageCard from '../../../Components/ImageCard.vue'

    export default defineComponent({
        name: 'ImageGallery',
        components: {
            AppLayout,
            Icon,
            ImageCard,
        },
        setup() {
            const store = useStore()

            const upload = (event) => {
                let data = new FormData()
                data.append('file', event.target.files[0])

                store.dispatch(ACTION_UPLOAD_IMAGE, data)
                    .then(response => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'success',
                            message: 'Image successfully uploaded!'
                        })
                    })
                    .catch(error => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'error',
                            message: 'Error while trying to uploaded the image.'
                        })
                    })
            }

            onMounted(() => {
                store.dispatch(ACTION_GET_IMAGES)
            })

            return { store, upload }
        },
    })
</script>
