<template>
    <MarketingLayout>
        <div class="">
            <div class="flex flex-col justify-between items-center">
                <div class="text-center lg:text-left my-10">
                    <h1 class="mb-5 text-5xl font-bold">
                        Talk to us
                    </h1>
                </div> 
                <div class="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div class="card-body space-y-4">
                        <div class="form-control">
                            <input type="text" placeholder="Email" class="input input-bordered">
                        </div> 
                        <div class="form-control">
                            <input type="text" placeholder="Subject" class="input input-bordered"> 
                        </div> 
                        <div class="form-control">
                            <textarea class="textarea h-24 textarea-bordered" placeholder="Message"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <input type="button" value="Send" class="btn btn-outline btn-primary">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MarketingLayout>
</template>

<script>
    import { defineComponent } from 'vue'
    import MarketingLayout from '../../Layouts/Marketing.vue'

    export default defineComponent({
        name: 'WebsiteHome',
        components: {
            MarketingLayout,
        },
        setup() {
            
        },
    })
</script>
