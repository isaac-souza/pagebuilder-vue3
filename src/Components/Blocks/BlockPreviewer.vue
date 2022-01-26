<template>
    <ImageLeft v-if="block.id == 1" :block="block"/>
    <FormLeft v-if="block.id == 2" :block="block"/>
    <VideoCenter v-if="block.id == 3" :block="block"/>
</template>

<script>
    import ImageLeft from './Heroes/ImageLeft.vue'
    import FormLeft from './Heroes/FormLeft.vue'
    import VideoCenter from './Heroes/VideoCenter.vue'

    export default {
        name: 'BlockPreviewer',
        components: {
            ImageLeft,
            FormLeft,
            VideoCenter,
        },
        props: {
            block: {
                type: Object,
                required: true
            },
        },
    }
</script>
