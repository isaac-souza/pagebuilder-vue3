<template>
    <BuilderLayout>
        <div class="lg:hidden">
            Sorry, but we only support large screens as of now.
        </div>
        <div class="hidden lg:block">
            <div class="flex min-h-screen">
                <div class="bg-slate-100 pb-48" style="width: 15%">
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
                            Authors
                        </div>
                        <div class="collapse-content space-y-4">
                            <Draggable class="dragArea list-group" :list="authors" :sort="false" :clone="cloneBlock" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
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
                            Buy Button
                        </div>
                        <div class="collapse-content space-y-4">
                            <Draggable class="dragArea list-group" :list="buy" :sort="false" :clone="cloneBlock" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
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
                            Guarantees
                        </div>
                        <div class="collapse-content space-y-4">
                            <Draggable class="dragArea list-group" :list="guarantees" :sort="false" :clone="cloneBlock" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
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
                </div>

                <div class="bg-slate-800 pb-48" style="width: 85%">
                    <div class="px-4 pt-4 gap-x-2 flex justify-end">
                        <a :href="'/app/landing-pages/' + route.params.uuid + '/preview'" target="_blank" class="btn btn-sm btn-success">
                            <Icon styles="w-4 h-4" name="external-link"/>
                            <span class="ml-1 font-normal text-xs">Preview</span>
                        </a>
                        <button @click="save()" class="btn btn-sm btn-info">
                            <Icon styles="w-4 h-4" name="save"/>
                            <span class="ml-1 font-normal text-xs">Save</span>
                        </button>
                        <button @click="publish()" class="btn btn-sm btn-error">
                            <Icon styles="w-5 h-5" name="upload"/>
                            <span class="ml-1 font-normal text-xs">Publish</span>
                        </button>
                        <div class="btn btn-sm btn-info">
                            <Icon styles="w-4 h-4" name="close"/>
                            <router-link to="/app" class="ml-1 font-normal text-xs">Close editor</router-link>
                        </div>
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
    </BuilderLayout>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { v4 as uuidv4 } from 'uuid'
    import { useRoute } from 'vue-router'

    import api from '../../../Utils/api'
    import blocks from '../../../Utils/blocks'

    import BuilderLayout from '../../../Layouts/Builder.vue'

    import Draggable from 'vuedraggable'
    import BlockRenderer from '../../../Components/Blocks/BlockRenderer.vue'
    import Icon from '../../../Components/Icon.vue'

    export default {
        name: 'PageBuilder',
        components: {
            BlockRenderer,
            Draggable,
            Icon,
            BuilderLayout,
        },
        setup() {
            const route = useRoute()

            //---------------------------------------------------------------
            // Available blocks
            //---------------------------------------------------------------
            const heroes = blocks.heroes
            const features = blocks.features
            const authors = blocks.authors
            const buy = blocks.buy
            const guarantees = blocks.guarantees

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
                const result = await api.fetchLandingPage(route.params.uuid)

                page.value = result.draft.main
            })

            const save = async () => {
                await api.updateDraft(route.params.uuid, page.value)
            }

            const publish = async () => {
                await api.updateLandingPage(route.params.uuid, page.value)
            }

            return { heroes, features, authors, buy, guarantees, page, cloneBlock, deleteBlock, save, publish, route }
        },
    }
</script>
