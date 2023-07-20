<template>
  <div>
    <button @click="closeCreateCompanyModal">Close</button>
    <p>Create Company</p>
    <input placeholder="Name" />
    <input type="file" placeholder="Logo" />
    <input type="file" placeholder="Cover Image" />
    <input placeholder="Description" />
    <input placeholder="Category" />
    <input placeholder="Total Employees" />
  </div>
</template>

<script lang="ts" setup>
import useCreateCompanyModalStore from '@/store/createCompanyModalStore';

const { closeCreateCompanyModal } = useCreateCompanyModalStore();
</script>
