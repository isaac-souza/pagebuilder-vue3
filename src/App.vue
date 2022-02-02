<template>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
