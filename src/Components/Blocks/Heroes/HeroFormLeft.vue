<template>
    <div :class="{'bg-gray-900 text-gray-100': block.data.darkMode, 'bg-white': !block.data.darkMode}">
        <div class="max-w-6xl mx-auto">
            <div :class="{'py-6 md:pt-12 pb-24': first, 'py-12 md:py-24': !first}" class="px-4 md:px-8">
                <div class="grid grid-cols-12">
                    <div class="col-span-12 md:col-span-7 flex flex-col items-start justify-center space-y-8">
                        <h1 class="max-w-3xl text-3xl md:text-4xl font-bold mx-auto">
                            {{ block.data.title }}
                        </h1>
                        <h2 class="max-w-3xl text-xl md:text-2xl font-thin mx-auto">
                            {{ block.data.subtitle }}
                        </h2>
                    </div>

                    <div class="col-span-12 md:col-span-5 space-y-4">
                        <div class="form-control">
                            <input type="text" placeholder="Name" class="input input-lg input-bordered">
                        </div>
                        <div class="form-control">
                            <input type="text" placeholder="Email" class="input input-lg input-bordered">
                        </div>
                        <div class="form-control">
                            <button class="btn btn-block btn-lg text-xl">
                                {{ block.data.buttonText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HerosFormLeft',
        props: {
            block: {
                type: Object,
                required: true,
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            
        },
    }
</script>
