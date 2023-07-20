<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <button @click="closeCreateCompanyModal">Close</button>
      <p>Create Company</p>
      <label for="add-company-logo">
        <input type="file" placeholder="Logo" />
      </label>
      <label for="add-company-cover-image">
        <input type="file" placeholder="Cover Image" />
      </label>
      <input placeholder="Name" />
      <input placeholder="Category" />
      <input placeholder="Total Employees" />
      <input placeholder="Description" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useCreateCompanyModalStore from '@/store/createCompanyModalStore';

const { closeCreateCompanyModal } = useCreateCompanyModalStore();
</script>

<style lang="scss">
.modal {
  &-wrapper {
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding: 4.8rem;
    top: 0px;
  }

  &-container {
    width: 400px;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
