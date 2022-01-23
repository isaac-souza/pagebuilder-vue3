<template>
    <div class="relative">
        <div class="pl-14">
            <ImageLeft v-if="block.id == 1" :block="block"/>
            <FormLeft v-if="block.id == 2" :block="block"/>
            <VideoCenter v-if="block.id == 3" :block="block"/>
        </div>

        <div class="absolute top-0 left-0 flex flex-col py-2 space-y-2 text-white bg-gray-700 rounded-md">
            <div class="btn btn-sm btn-ghost handle">
                <Icon name="move"/>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content">
                <label @click="toggleDrawer()" for="my-drawer" class="btn btn-sm btn-ghost drawer-button">
                    <Icon name="edit"/>
                </label>
            </div>
            <div @click="handleDeleteEvent()" class="btn btn-sm btn-ghost text-red-600">
                <Icon name="trash"/>
            </div>
        </div>
    </div>

    <teleport to="body">
        <div v-if="showDrawer" class="fixed top-0 left-0">
            <input id="my-drawer" type="checkbox" class="drawer-toggle">
            <div class="drawer-side h-screen">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    <button @click="showDrawer = false" class="btn btn-sm btn-active mt-2">Fechar</button>
                    
                    <p class="my-4 font-bold uppercase">Opções do bloco</p>
                    
                    <ImageLeftEditForm v-if="block.id == 1" v-model="block"/>

                    <button @click="showDrawer = false" class="btn btn-sm btn-active mt-2">Fechar</button>
                </ul>
            </div>
        </div>
    </teleport>
</template>

<script>
    import { ref } from 'vue'
    import Icon from './../Icon.vue'
    import Modal from './../Modal.vue'
    import ImageLeft from './Heroes/ImageLeft.vue'
    import ImageLeftEditForm from './Heroes/ImageLeftEditForm.vue'
    import FormLeft from './Heroes/FormLeft.vue'
    import VideoCenter from './Heroes/VideoCenter.vue'

    export default {
        name: 'BlockRenderer',
        emits: ['delete'],
        components: {
            Icon,
            Modal,
            ImageLeft,
            ImageLeftEditForm,
            FormLeft,
            VideoCenter,
        },
        props: {
            block: {
                type: Object,
                required: true
            }
        },
        setup(props, context) {
            const showEditModal = ref(false)

            const toggleEditModal = () => {
                showEditModal.value = !showEditModal.value
            }

            const handleDeleteEvent = () => {
                context.emit('delete', props.block)
            }

            const showDrawer = ref(false)

            const toggleDrawer = () => {
                showDrawer.value = !showDrawer.value
            }

            return { handleDeleteEvent, showEditModal, toggleEditModal, showDrawer, toggleDrawer }
        },
    }
</script>
