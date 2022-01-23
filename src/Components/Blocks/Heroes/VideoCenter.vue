<template>
    <div class="bg-white flex flex-col items-center space-y-8 py-8">
        <div class="mx-20">
            <h1 class="text-3xl font-black">O Melhor ebook sobre Facebook Ads!</h1>
        </div>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5DVDewOReoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="mx-20 text-center">
            <h2 class="text-3xl">Voce quer vender todos os dias usando o facebook Ads? Então voce precisa desse esbook!!!</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeroVideoCenter',
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
