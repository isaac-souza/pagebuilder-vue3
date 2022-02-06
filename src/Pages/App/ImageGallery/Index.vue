<template>
    <AppLayout>
        <div class="flex flex-col items-end md:flex-row md:justify-between md:items-center mb-8">
            <h2 class="text-2xl font-normal text-gray-600">Image Gallery</h2>
            <ImageUploadButton/>
        </div>

        <div class="grid grid-cols-12 gap-4">
            <div v-for="image in store.state.images" :key="image.uuid" class="col-span-6 lg:col-span-2">
                <ImageCard :image="image"/>
            </div>
        </div>
    </AppLayout>
</template>

<script>
    import { defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'

    import { ACTION_GET_IMAGES } from '../../../Utils/action-types'
    
    import AppLayout from '../../../Layouts/App.vue'
    import ImageCard from '../../../Components/ImageCard.vue'
    import ImageUploadButton from '../../../Components/ImageUploadButton.vue'

    export default defineComponent({
        name: 'ImageGallery',
        components: {
            AppLayout,
            ImageUploadButton,
            ImageCard,
        },
        setup() {
            const store = useStore()

            onMounted(() => {
                if(store.state.images == null) {
                    store.dispatch(ACTION_GET_IMAGES)
                }
            })

            return { store }
        },
    })
</script>
