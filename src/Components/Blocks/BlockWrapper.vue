<template>
    <div class="relative">
        <div class="pl-12">
            <component :is="block.componentName" :block="block"/>
        </div>

        <div class="absolute top-0 left-0 flex flex-col py-2 px-0 -ml-1.5 space-y-2 text-white bg-gray-600 rounded-md">
            <div class="btn btn-sm btn-ghost handle">
                <Icon name="move" class="h-5 w-5"/>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content">
                <label @click="toggleDrawer()" :for="block.uuid" class="btn btn-sm btn-ghost drawer-button">
                    <Icon name="settings" class="h-5 w-5"/>
                </label>
            </div>
            <div @click="handleDeleteEvent()" class="btn btn-sm btn-ghost text-red-600">
                <Icon name="trash" class="h-5 w-5"/>
            </div>
        </div>
    </div>

    <teleport to="body">
        <div v-if="showDrawer" class="fixed top-0 left-0">
            <input :id="block.uuid" type="checkbox" class="drawer-toggle">
            <div class="drawer-side h-screen">
                <label :for="block.uuid" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto border-r-2 w-64 bg-base-100 text-base-content">
                    <button @click="showDrawer = false" class="btn btn-sm btn-active mt-2">Close</button>
                    <p class="my-4 font-bold uppercase">Block options</p>
                    <component :is="block.optionsComponentName" v-model="block"/>
                </ul>
            </div>
        </div>
    </teleport>
</template>

<script>
    import { ref } from 'vue'
    import Icon from '../Icon.vue'
    
    import HeroImageLeft from './Heroes/HeroImageLeft.vue'
    import HeroImageLeftOptions from './Heroes/HeroImageLeftOptions.vue'
    import HeroFormLeft from './Heroes/HeroFormLeft.vue'
    import HeroFormLeftOptions from './Heroes/HeroFormLeftOptions.vue'
    import HeroVideoCenter from './Heroes/HeroVideoCenter.vue'
    import HeroVideoCenterOptions from './Heroes/HeroVideoCenterOptions.vue'

    import AuthorImageLeft from './Author/AuthorImageLeft.vue'
    import AuthorImageLeftOptions from './Author/AuthorImageLeftOptions.vue'

    import BuySimple from './Buy/BuySimple.vue'
    import BuySimpleOptions from './Buy/BuySimpleOptions.vue'

    import FeaturesGrid3 from './Features/FeaturesGrid3.vue'
    import FeaturesGrid3Options from './Features/FeaturesGrid3Options.vue'
    
    import Guarantee7Days from './Guarantees/Guarantee7Days.vue'
    import Guarantee7DaysOptions from './Guarantees/Guarantee7DaysOptions.vue'

    import Guarantee10Days from './Guarantees/Guarantee10Days.vue'
    import Guarantee10DaysOptions from './Guarantees/Guarantee10DaysOptions.vue'

    import Guarantee15Days from './Guarantees/Guarantee15Days.vue'
    import Guarantee15DaysOptions from './Guarantees/Guarantee15DaysOptions.vue'
    
    import Guarantee30Days from './Guarantees/Guarantee30Days.vue'
    import Guarantee30DaysOptions from './Guarantees/Guarantee30DaysOptions.vue'

    import ChaptersCollapse from './Chapters/ChaptersCollapse.vue'
    import ChaptersCollapseOptions from './Chapters/ChaptersCollapseOptions.vue'

    import FAQCollapse from './FAQ/FAQCollapse.vue'
    import FAQCollapseOptions from './FAQ/FAQCollapseOptions.vue'
    import FAQList from './FAQ/FAQList.vue'
    import FAQListOptions from './FAQ/FAQListOptions.vue'

    export default {
        name: 'BlockWrapper',
        emits: ['delete'],
        components: {
            Icon,

            HeroImageLeft,
            HeroImageLeftOptions,
            HeroFormLeft,
            HeroFormLeftOptions,
            HeroVideoCenter,
            HeroVideoCenterOptions,

            AuthorImageLeft,
            AuthorImageLeftOptions,

            BuySimple,
            BuySimpleOptions,

            FeaturesGrid3,
            FeaturesGrid3Options,

            Guarantee7Days,
            Guarantee7DaysOptions,
            Guarantee10Days,
            Guarantee10DaysOptions,
            Guarantee15Days,
            Guarantee15DaysOptions,
            Guarantee30Days,
            Guarantee30DaysOptions,

            ChaptersCollapse,
            ChaptersCollapseOptions,

            FAQCollapse,
            FAQCollapseOptions,
            FAQList,
            FAQListOptions,
        },
        props: {
            block: {
                type: Object,
                required: true
            }
        },
        setup(props, context) {
            const handleDeleteEvent = () => {
                context.emit('delete', props.block)
            }

            const showDrawer = ref(false)

            const toggleDrawer = () => {
                showDrawer.value = !showDrawer.value
            }

            return { handleDeleteEvent, showDrawer, toggleDrawer }
        },
    }
</script>
