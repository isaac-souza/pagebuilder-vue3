<template>
    <div class="flex min-h-screen">
        <div class="w-1/6 bg-slate-100 pb-48">
            <div class="m-4">
                <button class="btn btn-sm btn-block btn-active">Sair do Editor</button>
            </div>

            <div class="collapse collapse-arrow">
                <input type="checkbox"> 
                <div class="collapse-title text-xl font-medium">
                    Heroes
                </div> 
                <div class="collapse-content space-y-4"> 
                    <Draggable class="dragArea list-group" :list="heroes" :sort="false" :clone="cloneBlock" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
                        <template #item="{ element }">
                            <div class="list-group-item">
                                <div class="mb-4 p-1 border border-gray-400 rounded-md">
                                    <span>{{ element.description }}</span>
                                    <img :src="element.thumbUrl" class="w-full h-auto">
                                </div>
                            </div>
                        </template>
                    </Draggable>
                </div>
            </div>

            <div class="collapse collapse-arrow">
                <input type="checkbox"> 
                <div class="collapse-title text-xl font-medium">
                    Features
                </div> 
                <div class="collapse-content space-y-4"> 
                    <Draggable class="dragArea list-group" :list="features" :sort="false" :clone="cloneBlock" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
                        <template #item="{ element }">
                            <div class="list-group-item">
                                {{ element.description }}
                            </div>
                        </template>
                    </Draggable>
                </div>
            </div>
        </div>

        <div class="w-5/6 bg-slate-800 pb-48">
            <div class="px-4 pt-4 gap-x-2 flex justify-end">
                <!-- <button v-if="displayMode == 'mobile'" @click="toggleDisplayMode()" class="btn btn-sm btn-success">
                    <Icon styles="w-4 h-4" name="monitor"/>
                    <span class="ml-1 font-normal text-xs">Modo PC</span>
                </button>
                <button v-if="displayMode == 'pc'" @click="toggleDisplayMode()" class="btn btn-sm btn-success">
                    <Icon styles="w-4 h-4" name="mobile"/>
                    <span class="ml-1 font-normal text-xs">Modo Mobile</span>
                </button> -->
                <button class="btn btn-sm btn-success">
                    <Icon styles="w-4 h-4" name="external-link"/>                    
                    <span class="ml-1 font-normal text-xs">Visualizar</span>
                </button>
                <button class="btn btn-sm btn-info">
                    <Icon styles="w-4 h-4" name="save"/>
                    <span class="ml-1 font-normal text-xs">Salvar</span>
                </button>
            </div>

            <div v-if="displayMode == 'mobile'" class="flex justify-center p-4">
                <div class="mockup-phone">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard phone-1 artboard-demo overflow-x-auto">
                            <BlockRenderer v-for="block in page" :key="block.uuid" :block="block"/>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="displayMode == 'pc'" class="p-4">
                <Draggable class="dragArea list-group" :list="page" handle=".handle" group="blocks" item-key="uuid">
                    <template #item="{ element, index }">
                        <div class="list-group-item">
                            <BlockRenderer :block="element" @delete="deleteBlock(index)"/>
                        </div>
                    </template>
                </Draggable>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { v4 as uuidv4 } from 'uuid'
    import Draggable from 'vuedraggable'
    import BlockRenderer from '../../Components/Blocks/BlockRenderer.vue'
    import Icon from '../../Components/Icon.vue'

    export default {
        name: 'App',
        components: {
            BlockRenderer,
            Draggable,
            Icon,
        },
        setup() {
            //---------------------------------------------------------------
            // Available blocks
            //---------------------------------------------------------------
            const heroes = ref([
                {
                    id: 1,
                    type: 'hero',
                    model: 'image-left',
                    description: 'Image left',
                    thumbUrl: '/images/block-thumbs/image-right.png',
                    data: {
                        title: 'Venda todo dia usando o Facebook ADS!!!',
                        subtitle: 'Voce precisa desse ebook se quiser vender no Facebook!!!',
                        imageUrl: 'https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png',
                        buttonText: 'Comprar Agora!!!',
                        buttonLink: '#comprar',
                    }
                },
                {
                    id: 2,
                    type: 'hero',
                    model: 'form-left',
                    description: 'Form left',
                    thumbUrl: '/images/block-thumbs/form-right.png',
                    title: 'O nome do seu produto aqui',
                },
                {
                    id: 3,
                    type: 'hero',
                    model: 'video-center',
                    description: 'Video center',
                    title: 'O nome do seu produto aqui',
                    thumbUrl: '/images/block-thumbs/video-center.png',
                    video_url: 'https://www.youtube.com/embed/ZuxaFHe5-20',
                },
            ])

            const features = ref([
                {
                    id: 4,
                    type: 'features',
                    model: 'grid_3',
                    description: 'Grid 3x1',
                    title: 'Os beneficios do seu produto aqui',
                    list: new Array,
                },
                {
                    id: 5,
                    type: 'features',
                    model: 'grid_4',
                    description: 'Grid 4x1',
                    title: 'Os beneficios do seu produto aqui',
                    list: new Array,
                },
                {
                    id: 6,
                    type: 'features',
                    model: 'list',
                    description: 'Simple list',
                    title: 'Os beneficios do seu produto aqui',
                    list: new Array,
                },
            ])

            //---------------------------------------------------------------
            // Page
            //---------------------------------------------------------------
            const page = ref([])

            const cloneBlock = (block) => {
                block.uuid = uuidv4()
                return block
            }
            
            const deleteBlock = (index) => {
                page.value.splice(index, 1)
            }

            //---------------------------------------------------------------
            // Display mode
            //---------------------------------------------------------------
            const displayMode = ref('pc')
            const toggleDisplayMode = () => {
                displayMode.value = displayMode.value == 'pc' ? 'mobile' : 'pc'
            }

            return { heroes, features, page, cloneBlock, deleteBlock, displayMode, toggleDisplayMode }
        },
    }
</script>
