<!-- <template> -->
  <!-- <div class="px-2 text-base font-bold" v-if="label">
    {{ label }}
  </div> -->
  <!-- <input
    :value="value"
    :placeholder="placeholder"
    class="px-2 w-full h-12 border border-emerald-300 rounded-lg"
  /> -->
  <!-- <input :value="internalValue" @input="updateId($event.target.value)" :placeholder="placeholder" /> -->
<!-- </template> -->
<!-- TODO: input 태그 data binding 어케 하는지 모르겠음 잠시 보류 -->
<template>
    <input :value="id" @input="updateId($event)" :placeholder="placeholder" />
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps } from 'vue';
  
  interface InputFormProps {
    value: string;
    placeholder: string;
  }
  
  const props = defineProps<InputFormProps>();
  const id = ref<string>(props.value);
  
  const updateId = (event: Event) => {
    const target = event.target as HTMLInputElement;
    id.value = target.value;
  };
  </script>
  
  
  
<style scoped></style>
