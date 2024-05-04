<template>
  <UAlert
  :class="{ 'invisible' : !description }"
    icon="i-heroicons-exclamation-triangle-solid"
    title="Error"
    color="red"
    variant="subtle"
    :description="description"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  description: String,
});
</script>
