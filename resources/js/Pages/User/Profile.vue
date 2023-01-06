<template>
    <main>
        <div class="mx-auto max-w-7xl h-screen py-6 sm:px-6 lg:px-8">
            <div>
                <div class="p-4 pt-0">
                    <form @submit.prevent="submit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="flex flex-col text-center items-center">
                                <img class="h-52 bg-gray-100" :src="form.image" alt="">
                                <label for="uploadUserImage" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-base px-5 py-1 mt-8 text-center mr-2 mb-2 dark:focus:ring-yellow-900 cursor-pointer">Upload Image</label>
                                <input @change="changeImage" type="file" name="uploadUserImage" id="uploadUserImage" class="sr-only">
                            </div>
                            <div>
                                <div class="flex flex-col justify-center mt-5">
                                    <div>
                                        <LabelComponent for="username" value="Username" />
                                        <InputComponent id="username" type="text" class="mt-1 block w-full" v-model="form.username" required autocomplete="username" />
                                        <small v-if="form.errors.username" v-text="form.errors.username" class="text-red-500"></small>
                                    </div>

                                    <div class="mt-4">
                                        <LabelComponent for="firstname" value="First Name" />
                                        <InputComponent id="firstname" type="text" class="mt-1 block w-full" v-model="form.firstname" required autofocus autocomplete="firstname" />
                                        <small v-if="form.errors.firstname" v-text="form.errors.firstname" class="text-red-500"></small>
                                    </div>

                                    <div class="mt-4">
                                        <LabelComponent for="lastname" value="Last Name" />
                                        <InputComponent id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" required autofocus autocomplete="lastname" />
                                        <small v-if="form.errors.lastname" v-text="form.errors.lastname" class="text-red-500"></small>
                                    </div>


                                    <div class="mt-4">
                                        <LabelComponent for="birthday" value="Birthday" />
                                        <InputComponent id="birthday" type="date" class="mt-1 block w-full" v-model="form.birthday" required autofocus autocomplete="birthday" />
                                        <small v-if="form.errors.birthday" v-text="form.errors.birthday" class="text-red-500"></small>
                                    </div>

                                    <div class="mt-4">
                                        <LabelComponent for="email" value="Email" />
                                        <InputComponent id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="email" />
                                        <small v-if="form.errors.email" v-text="form.errors.email" class="text-red-500"></small>
                                    </div>

                                    <div class="flex items-center justify-end mt-4">
                                        <ButtonComponent class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            Update
                                        </ButtonComponent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  </template>

<script setup>

    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import MainLayout from '@/Layouts/Main.vue';
    import { Inertia } from '@inertiajs/inertia';
    import ButtonComponent from '@/Components/Button.vue';
    import InputComponent from '@/Components/Input.vue';
    import LabelComponent from '@/Components/Label.vue';
    import Swal from 'sweetalert2';

    const props = defineProps({
        user: Object,
    });

    const form = useForm({
        firstname: props.user.firstname,
        lastname: props.user.lastname,
        username: props.user.username,
        birthday: props.user.birthday,
        email: props.user.email,
        image: props.user.image,
        image_file: null
    });

    const submit = () => {
        form.post(route('user.update'), {
            preserveScroll : true,
            onSuccess: () => Swal.fire({
                title : "Success",
                text : "Successfully Updated Your Profile",
                icon : "success"
            })
        });
    };

    const changeImage = (evt) => {
        let file = evt.target.files[0];
        if(file.type.includes("image")){
            form.image = URL.createObjectURL(file);
            form.image_file = file;
        }else{
            Swal.fire({
                title : "Error",
                text : "Invalid Image Format",
                icon : "error"
            });
        }
    }

</script>

<script>
    export default {
        layout : MainLayout
    }
</script>
