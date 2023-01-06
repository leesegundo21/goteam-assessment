<template>

    <div id="sidebar" class="hidden sm:block bg-white border-gray-100 w-48 relative flex-none min-h-screen">
        <!-- Primary Navigation Menu -->
        <div class="flex flex-col mt-4">

            <p class=" ml-3 uppercase text-xs text-gray-600 mb-4 tracking-wider">Page</p>

            <NavLinkComponent v-for="(link, index) in links" :current_link="link" :key="index" :href="route(link.route_name)">
                <i v-if="link.icon" class="fas mr-1" :class="link.icon"></i> {{ link.title }}
            </NavLinkComponent>

        </div>
    </div>

</template>

<script setup>
    import NavLinkComponent from '@/Components/NavLink.vue';
    defineProps({
        links : Array
    });
</script>

<script>
    export default {
    }
</script>