<template>
  <div>
    <h1>Upload CV</h1>
    <p>You currently have no cv uploaded.</p>
    <p>{{ fileName }}</p>
    <label for="cv">
      <input name="cv" type="file" accept="*" @change="uploadFile" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const file = ref<any>(null);

const fileName = computed(() => file.value.name);

function uploadFile(event: any): void {
  file.value = event.target.files[0];
}
</script>
