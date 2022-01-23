<template>
    <div class="space-y-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Título</span>
            </label>
            <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Subtítulo</span>
            </label>
            <input v-model="block.data.subtitle" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">URL da capa</span>
            </label>
            <input v-model="block.data.imageUrl" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Texto do botão</span>
            </label>
            <input v-model="block.data.buttonText" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Link do botão</span>
            </label>
            <input v-model="block.data.buttonLink" type="text" class="input input-bordered input-sm">
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ImageLeftEditForm',
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
