<template>
    <button class="btn" @click="onClick">
        {{ count }}
    </button>
</template>


<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            onClick() {
                this.count++;
                console.log('clicked');
            }
        }
    }
</script>

<style>
    .btn {
        border: none;
        padding: 8px 20px;
        font-size: 20px;
        margin: 10px;
        background-color: black;
        color: white;
    }
</style>
