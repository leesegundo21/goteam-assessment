<template>
    <Head title="Register" />

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
        <div class="m-auto text-center mb-2">
            <Link href="/">
                <img class="w-52 m-auto" src="/images/logo.png" alt="">
            </Link>
        </div>

        <div>
            <LabelComponent for="username" value="Username" />
            <InputComponent id="username" type="text" class="mt-1 block w-full" v-model="form.username" required autocomplete="username" />
        </div>

        <div class="mt-4">
            <LabelComponent for="firstname" value="First Name" />
            <InputComponent id="firstname" type="text" class="mt-1 block w-full" v-model="form.firstname" required autofocus autocomplete="firstname" />
        </div>

        <div class="mt-4">
            <LabelComponent for="lastname" value="Last Name" />
            <InputComponent id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" required autofocus autocomplete="lastname" />
        </div>

        <div class="mt-4">
            <LabelComponent for="birthday" value="Birthday" />
            <InputComponent id="birthday" type="date" class="mt-1 block w-full" v-model="form.birthday" required autofocus autocomplete="birthday" />
        </div>

        <div class="mt-4">
            <LabelComponent for="email" value="Email" />
            <InputComponent id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="email" />
        </div>

        <div class="mt-4">
            <LabelComponent for="password" value="Password" />
            <InputComponent id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
        </div>

        <div class="mt-4">
            <LabelComponent for="password_confirmation" value="Confirm Password" />
            <InputComponent id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                Already registered?
            </Link>

            <ButtonComponent class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Register
            </ButtonComponent>
        </div>
    </form>
</template>

<script setup>
    import ButtonComponent from '@/Components/Button.vue';
    import GuestLayout from '@/Layouts/Guest.vue';
    import InputComponent from '@/Components/Input.vue';
    import LabelComponent from '@/Components/Label.vue';
    import ValidationErrors from '@/Components/ValidationErrors.vue';
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

    const form = useForm({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        birthday: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit = () => {
        form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };
</script>

<script>
export default {
    layout : GuestLayout
}
</script>
