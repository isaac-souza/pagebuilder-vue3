<template>
    <div class="form-control">
        <label class="label -mb-2">
            <span class="label-text">Imagem da capa</span>
        </label>
        <select v-model="url" class="select select-bordered select-sm w-full text-sm font-normal">
            <option v-for="image in store.state.images" :key="image.uuid" :value="image.url">{{ image.filename }}</option>
        </select>
    </div>
</template>

<script>
    import { defineComponent, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'

    import { ACTION_GET_IMAGES } from '../Utils/action-types'

    export default defineComponent({
        name: 'ImageSelect',
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: String,
                default: () => ({}),
            }
        },
        setup(props, context) {
            const store = useStore()

            onMounted(() => {
                if(store.state.images == null) {
                    store.dispatch(ACTION_GET_IMAGES)
                }
            })

            const url = computed({
                get: () => props.modelValue,
                set: (value) => context.emit('update:modelValue', value),
            })

            return { store, url }
        }
    })
</script>
