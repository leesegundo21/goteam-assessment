<template>
    <div class="max-w-md px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <div class="text-right">
            <button @click="remove()" v-if="this.$page.component == 'User/Dashboard'">
                <XMarkIcon class="text-red-500 hover:text-red-700 h-6 w-6"></XMarkIcon>
            </button>
        </div>
        <div class="flex flex-row justify-between mb-2">
            <div>
                <h3 class="text-3xl font-bold capitalize">{{details.name}}</h3>
            </div>
            <div class="flex flex-row align-middle items-center px-5">
                <div v-for="(pokeType, index) in details.types" :key="index">
                    <img class="h-8" :src="'/images/types/'+pokeType.type.name + '.png'" alt="">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-2 gap-2">
                <img class="bg-gray-100" :src="details.sprites.front_default" alt="">
                <img class="bg-gray-100" :src="details.sprites.back_default" alt="">
                <img class="bg-gray-100" :src="details.sprites.front_shiny" alt="">
                <img class="bg-gray-100" :src="details.sprites.back_shiny" alt="">
                <div class="col-span-2 flex flex-col items-start">
                    <button v-if="liked" class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 w-full mb-4" disabled>
                        <upSolid class="inline-block h-5 w-5 text-white"></upSolid>
                        Liked
                    </button>
                    <button :disabled="isLoading" class="text-blue-500 group bg-white hover:bg-blue-500 hover:text-white rounded-lg text-sm px-5 py-2.5 w-full mb-4 border border-blue-500" v-if="!liked" @click="like()">
                        <div v-if="!isLoading">
                            <HandThumbUpIcon class="inline-block h-5 w-5 text-blue-500 group-hover:text-white"></HandThumbUpIcon>
                            Like
                        </div>
                        <div v-if="isLoading">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Loading...
                        </div>
                    </button>
                    <button v-if="hated" class="text-white bg-red-500 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 w-full mb-4" disabled>
                        <downSolid class="inline-block h-5 w-5 text-white"></downSolid>
                        Disliked
                    </button>
                    <button :disabled="isLoading" class="text-red-500 group bg-white hover:bg-red-500 hover:text-white rounded-lg text-sm px-5 py-2.5 w-full mb-4 border border-red-500" v-if="!hated" @click="hate()">
                        <div v-if="!isLoading">
                            <HandThumbDownIcon class="inline-block h-5 w-5 text-red-500 group-hover:text-white"></HandThumbDownIcon>
                            Dislike
                        </div>
                        <div v-if="isLoading">
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                            Loading...
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div class="py-2">
                    <label>Type/s:</label>
                    <div class="pl-2">
                        <span v-for="(type, index) in details.types" :key="index" :class="type.type.name" class="font-bold">{{type.type.name}}</span>
                    </div>
                </div>
                <div class="py-2">
                    <label>Abilities:</label>
                    <div class="pl-2">
                        <ul>
                            <li v-for="(ability, index) in details.abilities" :key="index" class="font-bold">{{ability.ability.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="py-2">
                    <label>Stats:</label>
                    <div class="pl-2">
                        <ul>
                            <li v-for="(stat, index) in details.stats" :key="index">
                                <div>
                                    <label>{{stat.stat.name}}:</label>
                                    <label class="font-bold pl-2">{{stat.base_stat}}</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Inertia } from '@inertiajs/inertia';
    import { ref } from 'vue';
    import Swal from 'sweetalert2';
    import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/vue/24/outline'
    import { HandThumbUpIcon as upSolid, HandThumbDownIcon as downSolid, XMarkIcon } from '@heroicons/vue/24/solid';
    const props = defineProps({
        details: Object,
        liked: false,
        hated: false,
    });

    const isLoading = ref(false);

    const like = () => {
        isLoading.value = true;
        const params = {
            name : props.details.name,
            poke_id : props.details.id
        };
        axios.post(route('pokemon.like', params)).then(({data}) => {
            isLoading.value = false;
            if(!data.success) {
                Swal.fire({
                    title: 'Limit Exceeded',
                    text : 'You can only like 3 pokemons',
                    icon : "error"
                });
            }else{
                props.liked = true;
                props.hated = false;
            }
            Inertia.reload({
                onFinish: () => isLoading.value = false
            });
        });
    }
    const hate = () => {
        isLoading.value = true;
        const params = {
            name : props.details.name,
            poke_id : props.details.id
        };
        axios.post(route('pokemon.hate', params)).then(({data}) => {
            isLoading.value = false;
            if(!data.success) {
                Swal.fire({
                    title: 'Limit Exceeded',
                    text : 'You can only dislike 3 pokemons',
                    icon : "error"
                });
            }else{
                props.hated = true;
                props.liked = false;
            }
            Inertia.reload({
                onFinish: () => isLoading.value = false
            });
        });
    }

    const remove = () => {
        axios.delete(route('pokemon.delete', props.details.name)).then(() => {
            Inertia.reload();
        });
    }
</script>

<style lang="scss" scoped>
    span {
        color: #fff;
        margin: 0 0.25rem;
        padding: 0 0.5rem;
        border-radius: 15px;
        font-size: 13px;
        &.grass {
            background-color: #26CB4F;
        }
        &.bug {
            background-color: #3B994E;
        }
        &.poison {
            background-color: #5D2C87;
        }
        &.dark {
            background-color: #5A5979;
        }
        &.dragon {
            background-color: #61CAD9;
        }
        &.electric {
            background-color: #FBFA74;
        }
        &.fairy {
            background-color: #EA1369;
        }
        &.fighting {
            background-color: #F06138;
        }
        &.fire {
            background-color: #FD4C58;
        }
        &.flying {
            background-color: #93B2C7;
        }
        &.ghost {
            background-color: #906790;
        }
        &.grass {
            background-color: #27CB4F;
        }
        &.ground {
            background-color: #6E491F;
        }
        &.ice {
            background-color: #D8F0FA;
        }
        &.normal {
            background-color: #C999A7;
        }
        &.psychic {
            background-color: #F81C91;
        }
        &.rock {
            background-color: #8B3E21;
        }
        &.steal {
            background-color: #42BE92;
        }
        &.water {
            background-color: #86A8FC;
        }
    }
</style>
