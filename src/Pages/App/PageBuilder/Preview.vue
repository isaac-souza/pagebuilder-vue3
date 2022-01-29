<template>
    <BuilderLayout>
        <div v-for="(block, index) in page" :key="block.uuid">
            <BlockPreviewer :block="block" :first="index == 0"/>
        </div>
    </BuilderLayout>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import Api from '../../../Utils/api'
    import BuilderLayout from '../../../Layouts/Builder.vue'
    import BlockPreviewer from '../../../Components/Blocks/BlockPreviewer.vue'

    export default {
        name: 'PagePreview',
        components: {
            BlockPreviewer,
            BuilderLayout,
        },
        setup() {
            const page = ref([])
            const route = useRoute()

            onMounted(async () => {
                const result = await Api.fetchLandingPage(route.params.uuid)

                page.value = result.draft.main
            })

            return { page }
        },
    }
</script>
