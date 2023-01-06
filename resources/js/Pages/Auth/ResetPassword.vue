<template>
    <Head title="Reset Password" />

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
        <div>
            <LabelComponent for="email" value="Email" />
            <InputComponent id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
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
            <ButtonComponent :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Reset Password
            </ButtonComponent>
        </div>
    </form>
</template>

<script setup>
    import ButtonComponent from '@/Components/Button.vue';
    import MainLayout from '@/Layouts/Main.vue';
    import InputComponent from '@/Components/Input.vue';
    import LabelComponent from '@/Components/Label.vue';
    import ValidationErrors from '@/Components/ValidationErrors.vue';
    import { Head, useForm } from '@inertiajs/inertia-vue3';

    const props = defineProps({
        email: String,
        token: String,
    });

    const form = useForm({
        token: props.token,
        email: props.email,
        password: '',
        password_confirmation: '',
    });

    const submit = () => {
        form.post(route('password.update'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };
</script>

<script>
    export default {
        layout : MainLayout
    }
</script>
