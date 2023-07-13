<template>
  <footer class="footer-container">
    <div class="footer-links-container">
      <NuxtLink
        v-for="footerLink in footerLinks"
        :key="footerLink.href"
        :to="footerLink.href"
        >{{ footerLink.name }}</NuxtLink
      >
    </div>
    <p>© {{ currentYear }} {{ companyName }}</p>
  </footer>
</template>

<script setup>
import currentYear from '../../lib/constants/currentYear';
import companyName from '../../lib/constants/companyName';
import footerLinks from '../../lib/links/footerLinks';
</script>
