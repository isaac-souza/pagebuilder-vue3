<template>
    <div class="">
        <div class="form-control">
            <label class="cursor-pointer label flex justify-start">
                <input v-model="block.data.darkMode" type="checkbox" checked="checked" class="toggle toggle-primary">
                <span class="label-text text-base ml-2">Dark mode</span> 
            </label>
        </div>
        
        <div class="form-control mb-8">
            <label class="label -mb-2">
                <span class="label-text">Section title</span>
            </label>
            <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
        </div>

        <div class="mt-8 font-bold uppercase text-sm text-gray-500">Add new feature</div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Title</span>
            </label>
            <input v-model="title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="label-text">Description</span>
            </label>
            <textarea v-model="description" class="textarea h-24 textarea-bordered"></textarea>
        </div>

        <div class="flex justify-end">
            <button @click="add()" class="btn btn-sm btn-outline btn-primary mt-2">Add</button>
        </div>

        <div class="mt-8 mb-2 font-bold uppercase text-sm text-gray-500">Current features</div>

        <div class="flex flex-col mb-8">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden rounded-xl">
                        <table class="min-w-full divide-y divide-gray-200">
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="feature in block.data.list" :key="feature.uuid">
                                    <td class="px-2 py-1 whitespace-nowrap">
                                        {{ truncateText(feature.title) }}
                                    </td>
                                    <td class="px-2 py-1 flex justify-end items-center my-auto py-auto">
                                        <button @click="remove(block.uuid)" class="btn btn-sm btn-ghost text-red-500">
                                            <Icon name="trash" class="w-4 h-4"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed, ref } from 'vue'
    import Icon from '../../Icon.vue'
    import { v4 as uuidv4 } from 'uuid'

    export default defineComponent({
        name: 'FeaturesGrid3Options',
        emits: ['update:modelValue'],
        components: {
            Icon,
        },
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

            const title = ref('')
            const description = ref('')

            const add = () => {
                block.value.data.list.push({
                    uuid: uuidv4(),
                    title: title.value,
                    description: description.value,
                })

                title.value = ''
                description.value = ''
            }

            const remove = (uuidToRemove) => {
                const index = block.value.data.list.findIndex((features) => {
                    return features.uuid == uuidToRemove
                })

                block.value.data.list.splice(index, 1);
            }

            const truncateText = (text, lenght = 15) => {
                if(text.length <= 15) {
                    return text
                }

                return text.substring(0, lenght) + '...'
            }

            return { block, add, remove, title, description, truncateText }
        },
    })
</script>
