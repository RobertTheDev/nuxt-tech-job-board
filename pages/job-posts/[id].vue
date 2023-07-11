<template>
  <div>
    <p>Job Post {{ id }}</p>
  </div>
</template>

<script setup>
const route = useRoute();

const { id } = route.params;
</script>
