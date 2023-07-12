<template>
  <form @submit.prevent="uploadJob()">
    <label for="title">
      <input
        id="title"
        v-model="title"
        name="title"
        type="text"
        placeholder="title"
      />
    </label>
    <button>Upload</button>
  </form>
</template>

<script setup>
const title = ref('');

function uploadJob() {
  alert(title.value);
}
</script>
