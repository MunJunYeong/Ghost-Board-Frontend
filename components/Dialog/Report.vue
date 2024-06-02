<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <div>
    <div class="text-red-500 text-2xl flex justify-start">
      <button @click="(e)=>{
        e.preventDefault()
        isOpen = true
        }">
        <UIcon name="i-mdi-information-box" />
      </button>
    </div>

    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="font-semibold leading-6 text-red-500"
            >
            <UIcon dynamic name="i-mdi-information-box" />신고
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

        <template #footer>
          <Placeholder class="h-8" />
        </template>

      </UCard>
    </UModal>
  </div>
</template>
