<template>
  <footer class="footer-container">
    <div class="footer-links-container">
      <NuxtLink
        v-for="footerLink in footerLinks"
        :key="footerLink.href"
        class="footer-link"
        :to="footerLink.href"
        >{{ footerLink.name }}</NuxtLink
      >
    </div>
    <div class="footer-copyright-container">
      <p class="footer-copyright-text">
        © {{ currentYear }} {{ companyName }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import currentYear from '@/utils/constants/currentYear';
import companyName from '@/utils/constants/companyName';
import footerLinks from '@/utils/links/footerLinks';
</script>
