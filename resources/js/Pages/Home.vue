<template>
    <main>
        <div class="mx-auto max-w-7xl h-screen py-6 sm:px-6 lg:px-8">
            <div>
                <div class="p-4 pt-0">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold mb-4">Choose Your Pokemon</h2>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Pokemon Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">

                                    </th>
                                    <th scope="col" width="100" class="px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="pokemon in pokemons.results" :key="pokemon.name" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {{pokemon.name}}
                                    </th>
                                    <td>
                                        <div class="flex flex-row gap-4">
                                            <HandThumbUpIcon v-if="isLiked(pokemon.name)" class="block h-5 w-5 text-blue-500"></HandThumbUpIcon>
                                            <HandThumbDownIcon v-if="ishated(pokemon.name)" class="block h-5 w-5 text-red-500"></HandThumbDownIcon>
                                        </div>
                                    </td>
                                    <td>
                                        <Link class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-1 text-center mr-2 mb-2 dark:focus:ring-yellow-900" :href="route('pokemon.show', {name:pokemon.name})">Show</Link>
                                    </td>
                                </tr>
                                <tr v-if="!pokemons.results.length">
                                    <td class="py-4 text-xl font-bold text-center" colspan="5"> No data to show </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5">
                                        <div class="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
                                            <div class="flex-1 flex justify-between">
                                                <button @click="changePage(pokemons.previous)" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </button>
                                                <button @click="changePage(pokemons.next)" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </main>
  </template>

<script setup>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from '@/Layouts/Main.vue';
    import { Inertia } from '@inertiajs/inertia';
    import find from "lodash/find";
    import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/vue/24/solid';
import { Result } from 'postcss';

    const props = defineProps({
        pokemons: Object,
        likedpokemons: Array,
        hatedpokemons: Array
    })
    const changePage = (link) => {
        if(!link) return;
        Inertia.reload({data : {link: link}, only: ['pokemons']});
    }

    const isLiked = (name) => {
        return find(props.likedpokemons, (pokemon) => {
            return pokemon.name == name;
        });
    }
    const ishated = (name) => {
        return find(props.hatedpokemons, (pokemon) => {
            return pokemon.name == name;
        });
    }
</script>

<script>
    export default {
        layout : MainLayout
    }
</script>
