<script setup>
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t, locale } = useI18n({ useScope: 'global' })

const lang = $q.cookies.has('tradurs.lang') ? $q.cookies.get('tradurs.lang') : $q.lang.getLocale()?.substring(0, 2) || 'ko'
locale.value = lang
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
