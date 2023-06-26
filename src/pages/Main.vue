<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDiablo4Store } from '@/stores/diablo4'
import d4400 from '@/assets/d4_400.webp'
import d4800 from '@/assets/d4_800.webp'
import price from '@/assets/icons/price.svg'


const d4 = import.meta.env.VITE_APP_D4_ORIGIN
const { t, n } = useI18n({ useScope: 'global' })
const store = useDiablo4Store()

onMounted(() => {
  store.getItems()
})
</script>
<template>
  <div>
    <div class="games row q-col-gutter-md">
      <div class="col col-sm-4">
        <q-btn flat :ripple="false" padding="0" type="a" :href="d4" class="no-hover fit">
          <q-img :src="d4800" :srcset="`${d4400} 400w, ${d4800} 800w`"
            sizes="(max-width: 400px) 400w, (min-width: 400px) and (max-width: 800px) 800w" :ratio="1" />
          <div>
            <div class="q-pt-lg text-weight-bold text-h6 relative-position">
              {{ t('games.d4') }}
            </div>
            <q-chip size="12px" text-color="white" :label="t('beta')" color="blue" />
          </div>
        </q-btn>
      </div>
    </div>
    <q-separator class="q-my-xl" />
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-6" v-for="item in     store.items    " :key="item.itemId">
        <q-card flat class="item-card">
          <q-item clickable :href="`${d4}/item/${item.itemId}`" class="q-pa-lg">
            <q-item-section top avatar>
              <q-card flat class="q-pa-sm bg-transparent">
                <q-img
                  :src="item.itemType === 'aspect' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}.webp` : item.itemTypeValue1 === 'gem' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.itemTypeValue2}.webp` : `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.imageId}.webp`"
                  alt="Tradurs Item Image" class="item-image" />
              </q-card>
            </q-item-section>
            <q-item-section class="text-white">
              <q-item-label lines="2" class="text-weight-bold text-subtitle2 absolute">{{ item.name
              }}</q-item-label>
              <q-item-label
                class="text-weight-bold text-right text-body2 absolute-top-right row items-center q-gutter-x-xs"
                style="top:4px;right:4px">
                <q-icon v-if="item.price.currency === 'gold'" class="price" :name="`img:${price}`" size="16px" />
                <q-chip dense square class="text-weight-bold inset-shadow" color="yellow-8" :label="item.price.currency === 'gold' ? n(Number.parseFloat(item.price.currencyValue.toString(),
                  'decimal')) : t('offer.title')" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
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

.item-card {
  background-color: rgba(80, 0, 0);
  box-shadow: inset 0 4px 4px 0 rgba(180, 0, 0), inset 0 -4px 2px 0 rgba(60, 0, 0), 0 0 0 1px rgba(0, 0, 0, 1) !important;
}

.price {
  filter: invert(73%) sepia(71%) saturate(559%) hue-rotate(339deg) brightness(107%) contrast(97%);
}

.item-image {
  width: 48px;
  height: auto;
  filter: brightness(140%);
}
</style>