<template>
    <Head title="Confirm Password" />

    <div class="mb-4 text-sm text-gray-600">
        This is a secure area of the application. Please confirm your password before continuing.
    </div>

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
        <div>
            <LabelComponent for="password" value="Password" />
            <InputComponent id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" autofocus />
        </div>

        <div class="flex justify-end mt-4">
            <ButtonComponent class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Confirm
            </ButtonComponent>
        </div>
    </form>
</template>

<script setup>
    import { computed } from 'vue';
    import ButtonComponent from '@/Components/Button.vue';
    import MainLayout from '@/Layouts/Main.vue';
    import InputComponent from '@/Components/Input.vue';
    import LabelComponent from '@/Components/Label.vue';
    import ValidationErrors from '@/Components/ValidationErrors.vue';
    import { Head, useForm } from '@inertiajs/inertia-vue3';

    const form = useForm({
        password: '',
    });

    const submit = () => {
        form.post(route('password.confirm'), {
            onFinish: () => form.reset(),
        })
    };
</script>

<script>
    export default {
        layout : MainLayout
    }
</script>
