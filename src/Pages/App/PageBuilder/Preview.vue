<template>
    <div>
        <BuilderLayout>
            <div v-for="(block, index) in draft" :key="block.uuid">
                <BlockPreviewer :block="block" :first="index == 0"/>
            </div>
        </BuilderLayout>
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    import { ACTION_GET_LANDING_PAGES } from '../../../Utils/action-types'

    import BuilderLayout from '../../../Layouts/Builder.vue'
    import BlockPreviewer from '../../../Components/Blocks/BlockPreviewer.vue'

    export default {
        name: 'PagePreview',
        components: {
            BlockPreviewer,
            BuilderLayout,
        },
        setup() {
            const draft = ref([])
            const route = useRoute()
            const router = useRouter()
            const store = useStore()

            onMounted(() => {
                let result = store.getters.findLandingPage(route.params.uuid)
                
                if(result == null) {
                    store.dispatch(ACTION_GET_LANDING_PAGES)
                        .then(response => {
                            result = store.getters.findLandingPage(route.params.uuid)
                            
                            draft.value = result.draft.main
                        })
                        .catch(error => {
                            router.push({name: 'Dashboard'})
                        })
                }
            })

            return { draft }
        },
    }
</script>
