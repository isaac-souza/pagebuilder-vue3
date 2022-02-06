<template>
    <div>
        <Navbar/>

        <div class="max-w-5xl mx-auto py-8 space-y-4">
            <Alert/>
            <slot/>
        </div>
        
        <BreakPointHelper/>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    import Navbar from '../Components/Navbar.vue'
    import BreakPointHelper from '../Components/BreakPointHelper.vue'
    import Alert from '../Components/Alert.vue'

    export default defineComponent({
        name: 'AppLayout',
        components: {
            Navbar,
            BreakPointHelper,
            Alert,
        },
        setup() {
            
        },
    })
</script>
