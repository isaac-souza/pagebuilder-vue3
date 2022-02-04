<template>
    <div class="">
        <label class="btn btn-primary">
            <Icon name="upload" styles="w-5 h-5"/>
            <span class="ml-1">Upload an image</span>
            <input @input="upload" type="file" class="hidden"/>
        </label>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { useStore } from 'vuex'

    import {
        ACTION_SHOW_ALERT,
        ACTION_UPLOAD_IMAGE
    } from '../Utils/action-types'
    
    import Icon from './Icon.vue'

    export default defineComponent({
        name: 'ImageUploadButton',
        components: {
            Icon,
        },
        setup() {
            const store = useStore()
            
            const upload = (event) => {
                let data = new FormData()
                data.append('file', event.target.files[0])

                store.dispatch(ACTION_UPLOAD_IMAGE, data)
                    .then(response => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'success',
                            message: 'Image successfully uploaded!'
                        })
                    })
                    .catch(error => {
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'error',
                            message: 'Error while trying to uploaded the image.'
                        })
                    })
            }

            return { upload }
        },
    })
</script>
