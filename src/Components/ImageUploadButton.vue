<template>
    <button v-if="processing" disabled class="btn btn-primary disabled loading">
        Uploading...
    </button>
    <label v-else class="btn btn-primary">
        <Icon name="upload" styles="w-5 h-5"/>
        <span class="ml-1">Upload an image</span>
        <input @input="upload" type="file" class="hidden"/>
    </label>
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import { useStore } from 'vuex'

    import {
        ACTION_SHOW_ALERT,
        ACTION_UPLOAD_IMAGE
    } from '../Utils/action-types'
    
    import Icon from './Icon.vue'

    export default defineComponent({
        name: 'ImageUploadButton',
        emits: ['update:modelValue'],
        components: {
            Icon,
        },
        setup(props, context) {
            const store = useStore()
            const processing = ref(false)
            
            const upload = (event) => {
                let data = new FormData()
                data.append('file', event.target.files[0])

                processing.value = true

                store.dispatch(ACTION_UPLOAD_IMAGE, data)
                    .then(image => {
                        context.emit('update:modelValue', image.url)

                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'success',
                            message: 'Image successfully uploaded!'
                        })

                        processing.value = false
                    })
                    .catch(error => {
                      let res = error.response;
                      let errMessage = 'Error while trying to uploaded the image.';
                      if (res.status === 422) {
                        if (res.data.data.file) {
                          let errFile = res.data.data.file;
                          errMessage = errFile[0];
                          console.log(errMessage);
                        }
                      }
                        store.dispatch(ACTION_SHOW_ALERT, {
                            type: 'error',
                            message: errMessage
                        })

                        processing.value = false
                    })
            }

            return { upload, processing }
        },
    })
</script>
