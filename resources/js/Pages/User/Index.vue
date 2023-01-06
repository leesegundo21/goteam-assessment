<template>
    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div>
                <div class="p-4 pt-0">
                    <div class="mb-4">
                        <div class="flex justify-end">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input v-model="searchText" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
                            </div>
                            <button @click="search()" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 divide-y divide-gray-200 border">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Username
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        No. of Pokemons
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-white" v-for="user in users.data" :key="user.id">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900" v-text="user.name"></div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900" v-text="user.username"></div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900" v-text="user.pokemons.length"></div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <Link :href="route('user.show', user.id)" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-1 text-center mr-2 mb-2 dark:focus:ring-yellow-900">View</Link>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr class="bg-white">
                                    <td colspan="4">
                                        <div class="bg-white px-4 py-3 flex items-center justify-between border-gray-200 sm:px-6">
                                            <div class="flex-1 flex justify-between sm:hidden">
                                                <Link :href="users.prev_page_url" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </Link>
                                                <Link :href="users.next_page_url" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </Link>
                                            </div>
                                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                                <div>
                                                <p class="text-sm text-gray-700">
                                                    Showing
                                                    <span class="font-medium">{{ users.from }}</span>
                                                    to
                                                    <span class="font-medium">{{ users.to }}</span>
                                                    of
                                                    <span class="font-medium">{{ users.total }}</span>
                                                    results
                                                </p>
                                                </div>
                                                <div>
                                                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                                    <Link v-for="link in users.links" :key="link" :href="link.url" aria-current="page" :class=" link.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'" v-html="link.label"></Link>
                                                </nav>
                                                </div>
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
    import { ref } from 'vue';
    import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/vue/24/solid';

    const props = defineProps({
        users: Object,
    });
    const searchText = ref('');

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

    const search = () => {
        let params = {
            search: searchText.value
        };
        Inertia.get(route('user.index'), params, {
            preserveState : true,
            replace : true,
            preserveScroll : true
        });
    }
</script>

<script>
    export default {
        layout : MainLayout
    }
</script>
