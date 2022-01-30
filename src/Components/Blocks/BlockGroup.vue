<template>
    <div class="collapse collapse-arrow">
        <input type="checkbox">
        <div class="collapse-title text-xl font-medium">
            {{ title }}
        </div>
        <div class="collapse-content space-y-4">
            <Draggable class="dragArea list-group" :list="blocks" :sort="false" :clone="clone" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="id">
                <template #item="{ element }">
                    <div class="list-group-item">
                        <div class="mb-4 p-1 border border-gray-400 rounded-md">
                            <span>{{ element.description }}</span>
                            <img :src="element.thumbUrl" class="w-full h-auto" loading="lazy">
                        </div>
                    </div>
                </template>
            </Draggable>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import Draggable from 'vuedraggable'
    import { v4 as uuidv4 } from 'uuid'

    export default defineComponent({
        name: 'BlockGroup',
        components: {
            Draggable,
        },
        props: {
            title: {
                type: String,
                required: true
            },
            blocks: {
                type: Array,
                required: true
            }
        },
        setup() {
            const clone = (block) => {
                block.uuid = uuidv4()
                return block
            }
            
            return { clone }
        },
    })
</script>
