<template>
    <component :is="block.componentName" :block="block"/>
</template>

<script>
    import HeroImageLeft from './Heroes/ImageLeft.vue'
    import HeroFormLeft from './Heroes/FormLeft.vue'
    import HeroVideoCenter from './Heroes/VideoCenter.vue'

    export default {
        name: 'BlockPreviewer',
        components: {
            HeroImageLeft,
            HeroFormLeft,
            HeroVideoCenter,
        },
        props: {
            block: {
                type: Object,
                required: true
            },
        },
    }
</script>
