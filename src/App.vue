<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })

const lang = $q.cookies.has('tradurs.lang') ? $q.cookies.get('tradurs.lang') : 'ko'
locale.value = lang

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
