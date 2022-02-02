<template>
    <div>
        <div v-for="(block, index) in page" :key="block.uuid">
            <BlockPreviewer :block="block" :first="index == 0"/>
        </div>
    </div>
</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    import { ACTION_GET_LANDING_PAGE_BY_SLUG } from '../../../Utils/action-types'

    import BlockPreviewer from '../../../Components/Blocks/BlockPreviewer.vue'

    export default {
        name: 'PagePreview',
        components: {
            BlockPreviewer,
        },
        setup() {
            const page = ref([])
            const route = useRoute()
            const router = useRouter()
            const store = useStore()

            onMounted(() => {
                store.dispatch(ACTION_GET_LANDING_PAGE_BY_SLUG, route.params.slug)
                    .then(response => {
                        page.value = response.pages.main
                    })
                    .catch(error => {
                        router.push({name: 'WebsiteHome'})
                    })
            })

            return { page }
        },
    }
</script>
