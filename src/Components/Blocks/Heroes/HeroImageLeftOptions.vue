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
                <span class="label-text">Button text</span>
            </label>
            <input v-model="block.data.buttonText" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Button link</span>
            </label>
            <input v-model="block.data.buttonLink" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Pick from the gallery</span>
            </label>
            <ImageSelect v-model="block.data.imageUrl"/>
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Or upload a new image</span>
            </label>
            <ImageUploadButton v-model="block.data.imageUrl" class="btn btn-sm btn-info btn-outline btn-block text-xs font-normal"/>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'
    import ImageSelect from '../../ImageSelect.vue'
    import ImageUploadButton from '../../ImageUploadButton.vue'
    
    export default defineComponent({
        name: 'HeroImageLeftOptions',
        emits: ['update:modelValue'],
        components: {
            ImageSelect,
            ImageUploadButton,
        },
        props: {
            modelValue: {
                type: Object,
                default: () => ({}),
            }
        },
        setup(props, context) {
            const asdf = () => {
                alert('asdfasd')
            }

            const block = computed({
                get: () => props.modelValue,
                set: (value) => context.emit('update:modelValue', value),
            })

            return { block, asdf }
        },
    })
</script>
