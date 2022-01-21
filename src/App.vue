<template>
    <div class="max-w-6xl mx-auto">
        <div class="flex justify-between py-4">
            <div class="flex gap-4">
                <router-link to="/" class="btn btn-ghost">Dashboard</router-link>
            </div>
            <div class="flex gap-4">
                <router-link to="/login" class="btn btn-ghost">Login</router-link>
                <router-link to="/register" class="btn btn-ghost">Register</router-link>
            </div>
        </div>

        <!-- <router-view /> -->
    </div>

    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <div class="w-1/5 bg-slate-300">
            <div v-for="block in blocks" :key="block.id" draggable="true" @dragstart="onDragStart($event, block)" class="bg-green-500 h-16 flex items-center justify-center">
                {{ block.description }}
            </div>
        </div>

        <!-- Page -->
        <div class="w-4/5 p-4 bg-slate-100" dropzone="true" @dragover.prevent @dragenter.prevent @drop="onDrop($event, 1)">
            <BlockRenderer v-for="block in page" :key="block.uuid" :id="block.id"/>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { v4 as uuidv4 } from 'uuid';
    import BlockRenderer from './Components/Blocks/BlockRenderer.vue'

    export default {
        name: 'App',
        components: {
            BlockRenderer,
        },
        setup() {
            let blocks = ref([
                {
                    id: 1,
                    type: 'hero',
                    model: 'image_left',
                    description: 'Image left',
                    title: 'O nome do seu produto aqui',
                    image_url: 'https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png',
                },
                {
                    id: 2,
                    type: 'hero',
                    model: 'form_left',
                    description: 'Form left',
                    title: 'O nome do seu produto aqui',
                },
                {
                    id: 3,
                    type: 'hero',
                    model: 'video_left',
                    description: 'Video left',
                    title: 'O nome do seu produto aqui',
                    video_url: 'https://www.youtube.com/embed/ZuxaFHe5-20',
                },
            ])

            let page = ref([])

            let onDragStart = (event, item) => {
                event.dataTransfer.dropEffect = 'copy'
                event.dataTransfer.effectAllowed = 'copy'
                event.dataTransfer.setData('blockID', item.id)
            }
            
            let onDrop = (event) => {
                const blockID = event.dataTransfer.getData('blockID')
                let selectedBlock = JSON.parse(JSON.stringify(blocks.value.find(block => block.id == blockID)))
                selectedBlock.uuid = uuidv4()
                page.value.push(selectedBlock)
            }
            
            return { blocks, page, onDrop, onDragStart }
        },
    }
</script>
