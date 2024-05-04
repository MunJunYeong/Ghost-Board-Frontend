<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account"
          text="Edit Profile"
          variant="tonal"
          v-bind="activatorProps"
          @click="sendEmail"
        ></v-btn>
      </template>

      <v-card prepend-icon="mdi-account" title="User Profile">
        <v-card-text>
          <v-row dense>
            <v-col class="flexx h-12 gap-2" cols="12">
              <input
                v-model="code"
                class="fle-1 border border-gray-500 rounded-md"
              />
              <butotn class="bg-green-300 p-2 rounded-md">인증</butotn>
            </v-col>
            <v-col class="flex h-12 gap-2" cols="12">
              인증 번호:
              <input class="flex-1 border border-gray-500 rounded-md" />
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*indicates required field</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="()=>checkEmail(code)"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface InputFormProps {
  email: string;
  sendEmail: Promise<void>;
  checkEmail: Function;
}
const props = defineProps<InputFormProps>();
const dialog = ref(false);
let code: string;
</script>
