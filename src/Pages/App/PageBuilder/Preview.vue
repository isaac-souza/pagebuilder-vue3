<template>
    <div v-for="block in page" :key="block.uuid">
        <BlockPreviewer :block="block"/>
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import Api from '../../../Utils/api'
    import BlockPreviewer from '../../../Components/Blocks/BlockPreviewer.vue'

    export default {
        name: 'PagePreview',
        components: {
            BlockPreviewer,
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
