<template>
    <div class="space-y-2">
        <div class="form-control">
            <label class="cursor-pointer label flex justify-start">
                <input v-model="block.data.darkMode" type="checkbox" checked="checked" class="toggle toggle-primary">
                <span class="label-text text-base ml-2">Dark mode</span> 
            </label>
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Title</span>
            </label>
            <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Subtitle</span>
            </label>
            <input v-model="block.data.subtitle" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">YouTube video code</span>
            </label>
            <input v-model="block.data.youtubeVideoCode" type="text" class="input input-bordered input-sm">
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'HeroVideoCenterOptions',
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Object,
                default: () => ({}),
            }
        },
        setup(props, context) {
            const block = computed({
                get: () => props.modelValue,
                set: (value) => context.emit('update:modelValue', value),
            })

            return { block }
        },
    })
</script>
