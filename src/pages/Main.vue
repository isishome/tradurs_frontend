<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDiablo4Store } from '@/stores/diablo4'
import d4400 from '@/assets/d4_400.webp'
import d4800 from '@/assets/d4_800.webp'
import arrowRight from '@/assets/icons/arrow_right.svg'
import price from '@/assets/icons/price.svg'


const d4 = import.meta.env.VITE_APP_D4_ORIGIN
const { t, n } = useI18n({ useScope: 'global' })
const store = useDiablo4Store()

const loading = ref(true)

onMounted(() => {
  store.getItems()
    .then(() => {
      loading.value = false
    })
})
</script>
<template>
  <div>
    <div class="games row q-col-gutter-md">
      <div class="col col-sm-6">
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
    <div class="row justify-center q-col-gutter-xl">
      <template v-if="loading">
        <div class="col-12 col-sm-6" v-for="c in 2" :key="c">
          <q-card class="item-card">
            <q-card-section class="row justify-end q-pa-lg">
              <q-skeleton type="circle" round width="46px" height="46px" />
            </q-card-section>
            <q-card-section class="row justify-center q-px-lg">
              <q-skeleton type="text" round width="80%" height="40px" />
            </q-card-section>
            <q-card-section class="row justify-center">
              <q-skeleton type="circle" round width="150px" height="150px" />
            </q-card-section>
            <q-card-section class="q-pa-lg">
              <q-skeleton type="QChip" style="border-radius: 40px;" round width="100%" height="60px" />
            </q-card-section>
          </q-card>
        </div>
      </template>
      <div class="col-12 col-sm-6" v-for="item in store.items" :key="item.itemId">
        <q-card class="item-card">
          <q-card-section class="text-right q-pa-lg">
            <q-btn round flat padding="0" size="30px" class="invert" :icon="`img:${arrowRight}`" type="a"
              :href="`${d4}/item/${item.itemId}`" />
          </q-card-section>
          <q-card-section class="q-px-lg">
            <div style="word-break: break-all;">
              {{ item.name }}
            </div>
          </q-card-section>
          <q-card-section class="no-padding">
            <q-img
              :src="item.itemType === 'aspect' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}.webp` : item.itemTypeValue1 === 'gem' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.itemTypeValue2}.webp` : `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.imageId}.webp`"
              alt="Tradurs Item Image" width="30%" />
          </q-card-section>
          <q-card-section class="q-pa-lg">
            <q-chip dense size="lg" color="white" class="price  full-width">
              <div class="row items-center justify-between full-width">
                <q-avatar color="white" class="avatar" rounded :icon="`img:${price}`" />
                <div>
                  {{ item.price.currency === 'gold' ? n(Number.parseFloat(item.price.currencyValue.toString()), 'decimal',
                    {
                      notation: 'compact'
                    }) : t('offer.title') }}
                </div>
              </div>
            </q-chip>
          </q-card-section>
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
  color: white;
  border-radius: 50px;
  background: url('/images/back.webp');
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  filter: brightness(1.4);
  font-size: 1.4em;
  letter-spacing: 2px;
  font-weight: 700 !important;
  text-align: center;
}

.price {
  border-radius: 30px;
  font-size: 1.4em !important;
  padding: 30px 20px !important;
  line-height: 4;
}

.avatar {
  filter: invert(100%);
  border-radius: 30px !important;
}
</style>