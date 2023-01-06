<script setup>
import ButtonComponent from '@/Components/Button.vue';
import MainLayout from '@/Layouts/Main.vue';
import InputComponent from '@/Components/Input.vue';
import LabelComponent from '@/Components/Label.vue';
import ValidationError from '@/Components/ValidationErrors.vue';
import { Head, useForm } from '@inertiajs/inertia-vue3';

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <Head title="Forgot Password" />

    <div class="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
    </div>

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
        {{ status }}
    </div>

    <ValidationError class="mb-4" />

    <form @submit.prevent="submit">
        <div>
            <LabelComponent for="email" value="Email" />
            <InputComponent id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <ButtonComponent :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Email Password Reset Link
            </ButtonComponent>
        </div>
    </form>
</template>

<script>
    export default {
        layout : MainLayout
    }
</script>
