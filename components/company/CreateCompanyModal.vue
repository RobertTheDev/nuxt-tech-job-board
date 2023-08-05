<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-header">
        <h6>Create Company</h6>
        <button class="modal-close-button" @click="closeCreateCompanyModal">
          <font-awesome-icon
            class="modal-close-icon"
            icon="fa-solid fa-times"
          />
        </button>
      </div>

      <form class="modal-form">
        <label for="create-company-name-input" class="modal-input-container">
          <p>Enter Name</p>
          <input class="modal-input" />
        </label>
        <div class="image-selectors">
          <div for="add-logo-image">
            <p>Select Logo Image</p>
            <div class="logo-selector" />
          </div>
          <div for="add-company-cover-image">
            <p>Select Cover Image (Optional)</p>
            <div class="cover-image-selector" />
          </div>
        </div>
        <label
          for="create-company-category-selector"
          class="modal-input-container"
        >
          <p>Enter Category</p>
          <input class="modal-input" />
        </label>
        <label
          for="create-company-employees-input"
          class="modal-input-container"
        >
          <p>Enter Total Employees</p>
          <select>
            <option
              v-for="totalEmployee of totalEmployees"
              :key="totalEmployee"
            >
              {{ totalEmployee }}
            </option>
          </select>
        </label>
        <label
          for="create-company-description-input"
          class="modal-input-container"
        >
          <p>Enter Description</p>
          <input class="modal-input" />
        </label>

        <div class="modal-buttons-container">
          <button class="modal-button">Preview</button>
          <button class="modal-button">Create Company</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import createCompanyModalStore from '@/store/useCreateCompanyModalStore';

const { closeCreateCompanyModal } = createCompanyModalStore();

const totalEmployees = [
  '<100',
  '100-500',
  '500-1000',
  '1000-5000',
  '5000-10000',
  '10000+',
];
</script>

<style lang="scss">
.cover-image-selector {
  height: 120px;
  aspect-ratio: 16/9;
  background: lightgray;
  border-radius: 0.8rem;
}

.image-selectors {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
}

.logo-selector {
  height: 120px;
  width: 120px;
  border-radius: 100%;
  background: lightgray;
}

.modal {
  &-buttons-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1.6rem;
  }
  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    width: 100%;
  }
  &-input {
    height: 100%;
    width: 100%;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid lightgray;
    font-size: 1.4rem;
    &-container {
      height: 5.4rem;
      width: 100%;
    }
  }
  &-button {
    height: 5.4rem;
    flex: 1;
    padding: 0 0.8rem;
    border-radius: 0.4rem;
    background: #8046ef;
    color: white;
    font-size: 1.4rem;
  }
  &-wrapper {
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    top: 0px;
  }

  &-close {
    &-button {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 100%;
    }
    &-icon {
      font-size: 1.4rem;
    }
  }

  &-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &-container {
    width: 560px;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 1.6rem;
    margin: 4rem;
    max-height: 640px;
    overflow: hidden;
    overflow-y: scroll;
    gap: 2.4rem;
  }
}
</style>
