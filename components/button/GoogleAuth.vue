<template>
  <button
    type="button"
    v-on:click="onClick"
    class="bg-slate-900 text-white py-2 px-2 rounded-md text-center"
    :class="{ 'w-full': fullWidth }"
  >
    GoogleAuth
  </button>
</template>

<script setup lang="ts">

defineProps({
  onClick: Function,
  fullWidth: { type: Boolean, default: false },
});

const emit = defineEmits(["click"]);
</script>
