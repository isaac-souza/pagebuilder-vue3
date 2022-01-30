<template>
    <component :is="block.componentName" :block="block" :first="first"/>
</template>

<script>
    import HeroImageLeft from './Heroes/HeroImageLeft.vue'
    import HeroFormLeft from './Heroes/HeroFormLeft.vue'
    import HeroVideoCenter from './Heroes/HeroVideoCenter.vue'

    import AuthorImageLeft from './Author/AuthorImageLeft.vue'

    import BuySimple from './Buy/BuySimple.vue'

    import FeaturesGrid4 from './Features/FeaturesGrid4.vue'

    import Guarantee7Days from './Guarantees/Guarantee7Days.vue'
    import Guarantee10Days from './Guarantees/Guarantee10Days.vue'
    import Guarantee15Days from './Guarantees/Guarantee15Days.vue'
    import Guarantee30Days from './Guarantees/Guarantee30Days.vue'

    import FAQCollapse from './FAQ/FAQCollapse.vue'

    export default {
        name: 'BlockPreviewer',
        components: {
            HeroImageLeft,
            HeroFormLeft,
            HeroVideoCenter,
            AuthorImageLeft,
            BuySimple,
            FeaturesGrid4,
            Guarantee7Days,
            Guarantee10Days,
            Guarantee15Days,
            Guarantee30Days,
            FAQCollapse,
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
