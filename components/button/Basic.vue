<template>
    <button
      type="submit"
      v-on:click="onClick"
      :disabled="disabled"
      class="bg-emerald-300 text-white  py-2 px-2 rounded-md"
      :class="{ 'w-full' : fullWidth, 'hover:bg-aquamarine-dark' : hoverable }"
    >
      {{ text }}
    </button>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    text: String,
    onClick: Function,
    fullWidth: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
  });
  
  const emit = defineEmits(['click']);
  
  </script>
  