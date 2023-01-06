<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from '@/Layouts/Main.vue';
    import { Inertia } from '@inertiajs/inertia';
    import CardComponent from '@/Components/Card.vue';

    defineProps({
        pokemons: Array,
    })
    const changePage = (link) => {
        if(!link) return;
        Inertia.visit(route('home', {link: link}));
    }
</script>

<template>
    <header class="backdrop-blur-xl bg-white/30">
        <div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8 flex flex-row justify-left align-middle">
            <div>
                <Link class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-1 text-center mr-2 mb-2 dark:focus:ring-yellow-900" :href="route('home')">Go Back To List</Link>
            </div>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-7xl h-screen py-6 sm:px-6 lg:px-8">
            <div>
                <div class="p-4 pt-0">
                    <div class="flex justify-center mt-5">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CardComponent v-for="pokemon in pokemons" :key="pokemon.id" :details="JSON.parse(pokemon.details)" :liked="pokemon.is_liked" :hated="pokemon.is_hated"></CardComponent>
                        </div>
                        <div v-if="!pokemons.length">
                            <h3 class="font-bold text-3xl">No Pokemons Found</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </template>

<script>
    export default {
        layout : MainLayout
    }
</script>
