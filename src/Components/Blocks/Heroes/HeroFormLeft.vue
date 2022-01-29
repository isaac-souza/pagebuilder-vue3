<template>
    <div style="background-color: #ffffff">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
                <div class="col-lg-7 text-center text-lg-start">
                    <h1 class="display-6 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
                    <p class="col-lg-10 fs-5">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                    <div class="p-4 p-md-5 border rounded-3 bg-light">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <hr class="my-4">
                        <small class="text-muted">We hate spam as much as you do.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- <div class="grid grid-cols-12 bg-white py-8">
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
    </div> -->
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

<style scoped src="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>
