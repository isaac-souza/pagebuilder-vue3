<template>
    <div class="lg:hidden">
        Sorry, but we only support large screens as of now.
    </div>
    <div class="hidden lg:block">
        <div class="flex min-h-screen">
            <div class="w-1/6 bg-slate-100 pb-48">
                <div class="m-4">
                    <router-link to="/app" class="btn btn-sm btn-block btn-active">Close editor</router-link>
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
                    <button class="btn btn-sm btn-success">
                        <Icon styles="w-4 h-4" name="external-link"/>
                        <span class="ml-1 font-normal text-xs">Visualizar</span>
                    </button>
                    <button @click="save()" class="btn btn-sm btn-info">
                        <Icon styles="w-4 h-4" name="save"/>
                        <span class="ml-1 font-normal text-xs">Salvar</span>
                    </button>
                    <button @click="save()" class="btn btn-sm btn-error">
                        <Icon styles="w-5 h-5" name="upload"/>
                        <span class="ml-1 font-normal text-xs">Publicar</span>
                    </button>
                </div>
                <div class="p-4">
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
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { v4 as uuidv4 } from 'uuid'
    import { useRoute } from 'vue-router'
    import Api from '../../../Utils/api'
    import Draggable from 'vuedraggable'
    import BlockRenderer from '../../../Components/Blocks/BlockRenderer.vue'
    import Icon from '../../../Components/Icon.vue'

    export default {
        name: 'App',
        components: {
            BlockRenderer,
            Draggable,
            Icon,
        },
        setup() {
            const route = useRoute()

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

            onMounted(async () => {
                const result = await Api.fetchLandingPage(route.params.uuid)

                page.value = result.pages.mainPage
            })

            const save = async () => {
                await Api.updateLandingPage(route.params.uuid, page.value)
            }

            return { heroes, features, page, cloneBlock, deleteBlock, save }
        },
    }
</script>
