<script setup>
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div id="main-container-guest" class="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100">
        <div class="w-11/12 sm:max-w-md mx-4 mt-6 px-6 py-4 bg-white/30 shadow-md overflow-hidden sm:rounded-lg backdrop-blur-sm">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #main-container-guest {
        background-image: url('/images/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #C2DCD8;
        background-position: center;
    }
</style>
