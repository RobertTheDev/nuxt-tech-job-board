<template>
  <div>
    <h3>Account Settings</h3>
    <p>Contact Information</p>
    <p>Prefix</p>
    <label for="suffix">
      <select>
        <option v-for="suffix of suffixes" :key="suffix">{{ suffix }}</option>
      </select>
    </label>
    <input placeholder="First Name" />
    <input placeholder="Surname" />
    <input placeholder="Home Phone" />
    <input placeholder="Mobile Phone" />
    <input placeholder="Job Title" />
    <input placeholder="Company / Organisation" />
    <input placeholder="Website" />
  </div>
</template>

<script setup lang="ts">
const suffixes = ['Mr.', 'Mrs.', 'Ms.', 'Miss.', 'Mx.', 'Dr.', 'Prof.', 'Rev.'];
</script>
