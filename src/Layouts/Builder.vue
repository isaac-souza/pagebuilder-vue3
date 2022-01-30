<template>
    <div>
        <slot/>
        <BreakPointHelper/>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import BreakPointHelper from '../Components/BreakPointHelper.vue'

    export default defineComponent({
        name: 'BuilderLayout',
        components: {
            BreakPointHelper
        },
        setup() {
            
        },
    })
</script>
