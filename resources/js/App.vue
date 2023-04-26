<template>
    <div class="app">
        <nav>
            <router-link :to="'/'">
                Главная
            </router-link>

            <router-link :to="'/about'">
                О нас
            </router-link>
        </nav>

        <router-view />

        <clicker></clicker>

    </div>
</template>

<script>
    import Clicker from './components/Clicker.vue';

    export default {
        components: {
            Clicker
        },
        mounted() {
            console.log('app-mounted');
        }
    }

</script>


<style>
    .app {
        background-color: rgb(235, 233, 233);
        padding: 20px;
        text-align: center;
        border-radius: 8px;
    }

    .app nav {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
</style>
