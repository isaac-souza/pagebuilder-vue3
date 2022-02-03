<template>
    <component :is="block.componentName" :block="block" :first="first"/>
</template>

<script>
    import HeroImageLeft from './Heroes/HeroImageLeft.vue'
    import HeroFormLeft from './Heroes/HeroFormLeft.vue'
    import HeroVideoCenter from './Heroes/HeroVideoCenter.vue'

    import AuthorImageLeft from './Author/AuthorImageLeft.vue'

    import BuySimple from './Buy/BuySimple.vue'

    import FeaturesGrid3 from './Features/FeaturesGrid3.vue'

    import Guarantee7Days from './Guarantees/Guarantee7Days.vue'
    import Guarantee10Days from './Guarantees/Guarantee10Days.vue'
    import Guarantee15Days from './Guarantees/Guarantee15Days.vue'
    import Guarantee30Days from './Guarantees/Guarantee30Days.vue'

    import ChaptersCollapse from './Chapters/ChaptersCollapse.vue'

    import FAQCollapse from './FAQ/FAQCollapse.vue'
    import FAQList from './FAQ/FAQList.vue'

    export default {
        name: 'BlockPreviewer',
        components: {
            HeroImageLeft,
            HeroFormLeft,
            HeroVideoCenter,
            AuthorImageLeft,
            BuySimple,
            FeaturesGrid3,
            Guarantee7Days,
            Guarantee10Days,
            Guarantee15Days,
            Guarantee30Days,
            ChaptersCollapse,
            FAQCollapse,
            FAQList,
        },
        props: {
            block: {
                type: Object,
                required: true
            },
            first: {
                type: Boolean,
                default: false
            }
        },
    }
</script>
