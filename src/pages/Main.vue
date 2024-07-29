<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import d4400 from '@/assets/d4_400.webp'
import d4800 from '@/assets/d4_800.webp'
import d2r400 from '@/assets/d2r_400.webp'
import d2r800 from '@/assets/d2r_800.webp'

const route = useRoute()
const { t } = useI18n({ useScope: 'global' })

const d2r = import.meta.env.VITE_APP_D2R_ORIGIN
const d4 = import.meta.env.VITE_APP_D4_ORIGIN
const d4WithLang = d4 + (`/${route.params.lang || 'ko'}`)
const d2rWithLang = d2r + (`/${route.params.lang || 'ko'}`)
</script>
<template>
  <div>
    <div class="games row q-col-gutter-md">
      <div class="col col-sm-6">
        <div class="q-ma-lg">
          <q-btn flat no-caps :ripple="false" padding="0" type="a" :href="d4WithLang" class="no-hover fit">
            <q-img :src="d4800" :srcset="`${d4400} 400w, ${d4800} 800w`"
              sizes="(max-width: 400px) 400w, (min-width: 400px) and (max-width: 800px) 800w" :ratio="1" />
            <div>
              <div class="q-pt-lg text-weight-bold text-h6 relative-position">
                {{ t('games.d4') }}
              </div>
              <!-- <q-chip size="12px" text-color="white" :label="t('beta')" color="blue" /> -->
            </div>
          </q-btn>
        </div>
      </div>
      <div class="col col-sm-6">
        <div class="q-ma-lg">
          <q-btn flat no-caps :ripple="false" padding="0" type="a" :href="d2rWithLang" class="no-hover fit">
            <q-img :src="d4800" :srcset="`${d2r400} 400w, ${d2r800} 800w`"
              sizes="(max-width: 400px) 400w, (min-width: 400px) and (max-width: 800px) 800w" :ratio="1" />
            <div>
              <div class="q-pt-lg text-weight-bold text-h6 relative-position">
                {{ t('games.d2r') }}
              </div>
              <q-chip size="12px" text-color="white" :label="t('beta')" color="blue" />
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.games:deep(img) {
  border-radius: 10px;
}

.games:deep(img:hover) {
  filter: contrast(80%) !important;
}
</style>