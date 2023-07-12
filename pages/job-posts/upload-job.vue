<template>
  <div>
    <p>Upload job</p>
    <form @submit.prevent="uploadJob()">
      <label>
        <input v-model="title" placeholder="title" />
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
