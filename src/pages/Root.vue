<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  lang: String
})

const { locale } = useI18n({ useScope: 'global' })

locale.value = props.lang || 'ko'
</script>

<template>
  <RouterView />
</template>