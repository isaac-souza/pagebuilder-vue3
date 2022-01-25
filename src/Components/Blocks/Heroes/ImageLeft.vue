<template>
    <div class="grid grid-cols-12 bg-white py-12">
        <div class="col-span-12 md:col-span-7 flex flex-col items-start justify-center p-8 space-y-4">
            <h1 class="text-3xl font-black">{{ block.data.title }}</h1>
            <h2 class="text-xl text-gray-700">{{ block.data.subtitle }}</h2>
            <a :href="block.data.buttonLink" class="btn btn-error btn-lg">{{ block.data.buttonText }}</a>
        </div>
        <div class="col-span-12 md:col-span-5 p-8">
            <img :src="block.data.imageUrl" class="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroImageLeft',
        props: {
            block: {
                type: Object,
                required: true,
            }
        },
        setup() {
            
        },
    }
</script>
