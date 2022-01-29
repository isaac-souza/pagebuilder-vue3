<template>
    <div class="grid grid-cols-12 bg-white py-8">
        <div class="col-span-7 flex flex-col items-start justify-center p-8 space-y-8">
            <h1 class="text-4xl font-black">O melhor Ebook do Brasil sobre Facebook Ads!</h1>
            <h2 class="text-xl">Voce precisa desse ebook se quiser vender no Facebook!!!</h2>
        </div>

        <div class="col-span-5 p-8">
            <div>
                <div class="form-control">
                    <label class="label -mb-2">
                        <span class="label-text text-lg">Nome</span>
                    </label> 
                    <input type="text" class="input input-bordered">
                </div>
                <div class="form-control">
                    <label class="label -mb-2">
                        <span class="label-text text-lg">Email</span>
                    </label> 
                    <input type="text" class="input input-bordered">
                </div>
                <div class="form-control">
                    <button class="btn btn-block mt-4 text-xl">Baixar Ebook!!!</button>
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
            }
        },
        setup() {
            
        },
    }
</script>
