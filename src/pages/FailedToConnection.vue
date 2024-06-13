<script setup>
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { useGlobalStore } from '@/stores/global'

const $q = useQuasar()
const globalStore = useGlobalStore()
const { t } = useI18n({ useScope: 'global' })
const brLoc = globalStore.localeOptions.map(lo => lo.value).includes($q.lang.getLocale()?.substring(0, 2) || '') ? $q.lang.getLocale()?.substring(0, 2) || 'ko' : 'ko'
</script>

<template>
  <div class="absolute-center column items-center q-gutter-sm full-width">
    <div class="row justify-center items-center q-gutter-sm">
      <img class="logo" src="/images/tradurs_logo.svg" width="48" />
      <img class="letter" src="/images/tradurs_text.svg" height="40" />
    </div>
    <div class="text-h6">{{ t('page.ftc') }}
    </div>
  </div>
</template>

<style scoped>
.logo {
  animation: opacity 1.4s ease-out forwards;
}

.letter {
  transition: fill .3s ease;
  animation: slidein .3s ease-out .3s forwards;
  opacity: 0;
  font-size: 40px;
  font-weight: bold;
}

@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slidein {
  0% {
    transform: translateX(2%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>