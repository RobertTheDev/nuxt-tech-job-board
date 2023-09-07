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

<script setup>
import { ref, computed } from 'vue';

const file = ref(null);

const fileName = computed(() => file.value?.name);

const uploadFile = (event) => {
  file.value = event.target.files[0];
};
</script>
