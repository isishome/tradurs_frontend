<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { locale } = useI18n({ useScope: 'global' })
const route = useRoute()

locale.value = route.params.lang || 'ko'
document.documentElement.setAttribute('lang', locale.value)

if (import.meta.env.PROD) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-H1S2FXGF84');
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
