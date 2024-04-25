<template>
    <button type="submit" v-on:click="onClick" class="button w-full h-full rounded-lg">
        {{text}}
    </button>
</template>

<script>
    export default {
        props: {
            text: String,
            onClick: Function
        }
    }
</script>

<style scoped>
    .button {
        background-color: aquamarine;
    }
</style>