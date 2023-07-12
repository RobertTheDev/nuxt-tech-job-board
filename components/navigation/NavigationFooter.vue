<template>
  <header class="footer-container">
    <NuxtLink
      v-for="footerLink in footerLinks"
      :key="footerLink.href"
      :to="footerLink.href"
      >{{ footerLink.name }}</NuxtLink
    >
    <p>© {{ currentYear }} {{ companyName }}</p>
  </header>
</template>

<script setup>
import currentYear from '../../lib/constants/currentYear';
import companyName from '../../lib/constants/companyName';
import footerLinks from '../../lib/links/footerLinks';
</script>

<style>
.footer-container {
  align-items: center;
  background: whitesmoke;
  display: flex;
  gap: 10px;
  height: 60px;
  width: 100%;
}
</style>
