<template>
  <div>
    <p>Upload job</p>
    <form @submit.prevent="uploadJob()">
      <label for="title-input">
        <input
          id="title-input"
          v-model="title"
          type="text"
          placeholder="title"
        />
      </label>
      <button>Upload</button>
    </form>
  </div>
</template>

<script setup>
const title = ref('');

function uploadJob() {
  alert(title.value);
}
</script>
