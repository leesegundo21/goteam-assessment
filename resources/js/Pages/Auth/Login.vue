<template>
        <Head title="Log in" />

        <ValidationErrors class="mb-4" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="m-auto text-center mb-2">
                <Link href="/">
                    <img class="w-52 m-auto" src="/images/logo.png" alt="">
                </Link>
            </div>
            <div>
                <LabelComponent for="username" value="Username" />
                <InputComponent id="username" type="text" class="mt-1 block w-full" v-model="form.username" required autofocus autocomplete="username" />
            </div>

            <div class="mt-4">
                <LabelComponent for="password" value="Password" />
                <InputComponent id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <CheckboxComponent name="remember" v-model="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Register
                </Link>

                <ButtonCompornent class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </ButtonCompornent>
            </div>
        </form>
</template>

<script setup>
    import ButtonCompornent from '@/Components/Button.vue';
    import CheckboxComponent from '@/Components/Checkbox.vue';
    import GuestLayout from '@/Layouts/Guest.vue';
    import InputComponent from '@/Components/Input.vue';
    import LabelComponent from '@/Components/Label.vue';
    import ValidationErrors from '@/Components/ValidationErrors.vue';
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import { defineComponent } from '@vue/runtime-core';

    defineProps({
        canResetPassword: Boolean,
        status: String,
    });

    const form = useForm({
        username: '',
        password: '',
        remember: false
    });

    const submit = () => {
        form.post(route('login'), {
            onFinish: () => form.reset('password'),
        });
    };

</script>

<script>
    export default {
        layout : GuestLayout
    }
</script>
