<template>
    <input :placeholder="placeholder" class="px-2 w-full h-12 border border-emerald-300 rounded-lg">
    </input>
</template>

<script>
    export default {
        props: {
            placeholder: String 
        }
    }
</script>

<style scoped>
</style>