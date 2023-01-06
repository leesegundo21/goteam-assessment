<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Navbar from '@/Components/Navbar.vue';
</script>

<template>
    <div id="main-container" class="min-h-full">
      <Navbar></Navbar>
      <slot />
    </div>
  </template>

<style lang="scss" scoped>
    #main-container {
        background-image: url('/images/bg.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #C2DCD8;
        background-position: center;
    }
</style>
