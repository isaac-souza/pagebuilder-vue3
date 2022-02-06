<template>
    <BuilderLayout>
        <div class="lg:hidden">
            Sorry, but we only support large screens as of now.
        </div>
        <div class="hidden lg:block">

            <div class="flex min-h-screen">
                <div class="bg-slate-100 overflow-y-auto h-screen w-1/6">
                    <div class="pb-48">
                        <BlockGroup v-for="group in groups" :key="group.uuid" :title="group.title" :blocks="group.blocks"/>
                    </div>
                </div>

                <div class="bg-slate-800 overflow-y-auto h-screen w-5/6">
                    <div class="p-0">
                        <div class="px-4 pt-4 gap-x-2 flex justify-end">
                            <a :href="'/app/preview/' + route.params.uuid + '/main'" target="_blank" class="btn btn-sm btn-success">
                                <Icon styles="w-4 h-4" name="external-link"/>
                                <span class="ml-1 font-normal text-xs">Preview</span>
                            </a>

                            <button v-if="saving" class="btn btn-sm btn-info loading disabled">
                                <span class="ml-1 font-normal text-xs">Saving...</span>
                            </button>
                            <button v-else @click="save()" class="btn btn-sm btn-info">
                                <Icon styles="w-4 h-4" name="save"/>
                                <span class="ml-1 font-normal text-xs">Save</span>
                            </button>

                            <button v-if="publishing" class="btn btn-sm btn-error loading disabled">
                                <span class="ml-1 font-normal text-xs">Publishing...</span>
                            </button>
                            <button v-else @click="publish()" class="btn btn-sm btn-error">
                                <Icon styles="w-5 h-5" name="upload"/>
                                <span class="ml-1 font-normal text-xs">Publish</span>
                            </button>
                            <div class="btn btn-sm btn-info">
                                <Icon styles="w-4 h-4" name="close"/>
                                <router-link to="/app" class="ml-1 font-normal text-xs">Close editor</router-link>
                            </div>
                        </div>
                        <div class="p-4 block">
                            <Draggable class="dragArea list-group" :list="draft" handle=".handle" group="blocks" item-key="uuid">
                                <template #item="{ element, index }">
                                    <div class="list-group-item">
                                        <BlockWrapper :block="element" @delete="deleteBlock(index)"/>
                                    </div>
                                </template>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BuilderLayout>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStore } from 'vuex'

    import { 
        ACTION_GET_LANDING_PAGES,
        ACTION_UPDATE_DRAFT,
        ACTION_UPDATE_PAGES,

        ACTION_SHOW_ALERT,
    } from '../../../Utils/action-types'

    import { v4 as uuidv4 } from 'uuid'

    import blocks from '../../../Utils/blocks'

    import Draggable from 'vuedraggable'

    import BuilderLayout from '../../../Layouts/Builder.vue'
    import BlockWrapper from '../../../Components/Blocks/BlockWrapper.vue'
    import BlockGroup from '../../../Components/Blocks/BlockGroup.vue'
    
    import Icon from '../../../Components/Icon.vue'

    export default {
        name: 'PageBuilder',
        components: {
            BlockWrapper,
            Draggable,
            Icon,
            BuilderLayout,
            BlockGroup,
        },
        setup() {
            const route = useRoute()
            const store = useStore()

            const groups = blocks.groups
            const draft = ref([])
            
            const saving = ref(false)
            const publishing = ref(false)

            const cloneBlock = (block) => {
                block.uuid = uuidv4()
                return block
            }
            
            const deleteBlock = (index) => {
                draft.value.splice(index, 1)
            }

            onMounted(() => {
                let result = store.getters.findLandingPage(route.params.uuid)

                if(result == null) {
                    store.dispatch(ACTION_GET_LANDING_PAGES)
                        .then(() => {
                            result = store.getters.findLandingPage(route.params.uuid)

                            draft.value = result.draft.main
                        })
                }
                else {
                    draft.value = result.draft.main
                }
            })

            const save = () => {
                saving.value = true

                store.dispatch(ACTION_UPDATE_DRAFT, {uuid: route.params.uuid, draft: draft.value})
                    .then(() => {
                        saving.value = false
                    })
                    .catch(() => {
                        saving.value = false
                    })
            }

            const publish = () => {
                publishing.value = true

                store.dispatch(ACTION_UPDATE_PAGES, {uuid: route.params.uuid, pages: draft.value})
                    .then(() => {
                        publishing.value = false
                    })
                    .catch(() => {
                        publishing.value = false
                    })
            }

            return { groups, draft, cloneBlock, deleteBlock, save, publish, route, saving, publishing }
        },
    }
</script>
