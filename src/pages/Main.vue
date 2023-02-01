<script setup>
import d4400 from '@/assets/d4_400.webp'
import d4800 from '@/assets/d4_800.webp'

const d4 = import.meta.env.VITE_APP_D4_ORIGIN
</script>
<template>
  <div class="games row q-col-gutter-md">
    <div class="col col-sm-4">
      <q-btn flat :ripple="false" padding="0" type="a" :href="d4" class="no-hover fit">
        <q-img :src="d4800" :srcset="`${d4400} 400w,
        ${d4800} 800w`" sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w" :ratio="1" />
        <div>
          <div class="q-pt-lg text-weight-bold text-h6 relative-position">
            디아블로 4
          </div>
          <q-chip size="12px" text-color="white" label="준비중" color="red" />
        </div>
      </q-btn>
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