<template>
    <button
      type="submit"
      v-on:click="onClick"
      class="bg-emerald-300 text-white  py-2 px-2 rounded-md"
      :class="{ 'w-full' : fullWidth, 'hover:bg-aquamarine-dark' : hoverable }"
    >
      {{ text }}
    </button>
  </template>
  
  <script setup lang="ts">
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    text: String,
    onClick: Function,
    fullWidth: { type: Boolean, default: false },
    hoverable: { type: Boolean, default: true },
  });
  
  const emit = defineEmits(['click']);
  
  const onClickHandler = () => {
    emit('click');
    if (props.onClick) {
      props.onClick();
    }
  };
  </script>
  