<template>
    <div class="navbar mb-2 shadow-lg">
        <div class="flex-none px-2 mx-2">
            <span class="text-lg font-bold">
                EZ LandingPage
            </span>
        </div> 
        <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
                <a class="btn btn-ghost rounded-btn">
                    Home
                </a>
                <a class="btn btn-ghost rounded-btn">
                    Pricing
                </a>
                <a class="btn btn-ghost rounded-btn">
                    Contact
                </a>
            </div>
        </div> 
        <div class="flex justify-end gap-x-2">
            <router-link to="/login" class="btn btn-ghost">
                Login
            </router-link>
            <router-link to="/register" class="btn btn-primary">
                Register
            </router-link>
        </div>
    </div>

    <slot/>
</template>