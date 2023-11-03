<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useDiablo4Store } from '@/stores/diablo4'
import d4400 from '@/assets/d4_400.webp'
import d4800 from '@/assets/d4_800.webp'
import arrowRight from '@/assets/icons/arrow_right.svg'
import price from '@/assets/icons/price.svg'

const route = useRoute()
const { t, n } = useI18n({ useScope: 'global' })
const store = useDiablo4Store()

const d4 = import.meta.env.VITE_APP_D4_ORIGIN
const d4WithLang = d4 + (`/${route.params.lang || 'ko'}`)
const imgSrc = (item) => {
  return item.itemType === 'aspect' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}.webp` :
    ['gem', 'summoning'].includes(item.itemTypeValue1) ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.itemTypeValue2}.webp` :
      item.itemTypeValue1 === 'elixir' ? `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.itemTypeValue2.split('_')[1]}.webp` :
        `${d4}/images/items/${item.itemType}/${item.itemTypeValue1}/${item.imageId}.webp`
}

const currencyValueImg = (item) => {
  return item.price.currency === 'gold' ? `${d4}/images//items/currencies/gold.webp` : item.price.currency === 'summoning' ? `${d4}/images/items/consumables/summoning/${item.price.currencyValue}.webp` : ''
}
const priceName = (item) => {
  return item.price.currency === 'gold' ? n(Number.parseFloat(item.price.currencyValue.toString()), 'decimal', { notation: 'compact' }) : item.price.currency === 'summoning' ? `${store.summonings.find(s => s.value === item.price.currencyValue)?.label}` : t('item.offer')
}

const loading = ref(true)

onMounted(() => {
  store.getBase().then(() => {
    store.getItems()
      .then(() => {
        loading.value = false
      })
  })
})
</script>
<template>
  <div>
    <div class="games row q-col-gutter-md">
      <div class="col col-sm-6">
        <div class="q-ma-lg">
          <q-btn flat :ripple="false" padding="0" type="a" :href="d4WithLang" class="no-hover fit">
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
    </div>
    <q-separator class="q-my-xl" />
    <div class="row q-col-gutter-md">
      <template v-if="loading">
        <div class="col-12 col-sm-6" v-for="c in 2" :key="c">
          <q-card class="item-card q-my-xl"
            :class="$q.screen.lt.sm ? 'q-mx-md' : $q.screen.lt.md ? 'q-mx-xs' : 'q-mx-lg'">
            <q-card-section class="row justify-between q-pa-lg">
              <q-skeleton type="QChip" round width="92px" height="46px" />
              <q-skeleton type="circle" round width="46px" height="46px" />
            </q-card-section>
            <q-card-section class="row justify-center q-px-lg">
              <q-skeleton type="text" round width="80%" height="40px" />
            </q-card-section>
            <q-card-section class="row justify-center">
              <q-skeleton type="circle" round width="100px" height="100px" />
            </q-card-section>
            <q-card-section class="q-pa-xl">
              <q-skeleton type="QChip" style="border-radius: 40px;" round width="100%" height="60px" />
            </q-card-section>
          </q-card>
        </div>
      </template>
      <q-intersection class="col-12 col-sm-6 item-wrap" v-for="item in  store.items " :key="item.itemId"
        transition="jump-up" once>
        <q-card class=" item-card q-my-xl" :class="$q.screen.lt.sm ? 'q-mx-md' : $q.screen.lt.md ? 'q-mx-xs' : 'q-mx-lg'">
          <q-card-section class="row justify-between q-pa-lg">
            <q-btn v-if="item.ladder" no-caps rounded unelevated size="18px" :label="t('item.season')" color="dark-red"
              class="no-pointer-events" />
            <div v-else></div>
            <q-btn round flat padding="0" size="30px" class="invert" :icon="`img:${arrowRight}`" type="a"
              :href="`${d4}/item/${item.itemId}`" />
          </q-card-section>
          <q-card-section class="q-px-lg">
            <div style="word-break: break-all;">
              <span v-show="!['inventory', 'consumables'].includes(item.itemType)">
                {{ item.name }}
              </span>
              <span v-show="item.itemTypeValue1 === 'gem'">
                {{ store.gems.find(g => g.value === item.itemTypeValue2)?.label }}
              </span>
              <span v-show="item.itemTypeValue1 === 'elixir'">
                {{ store.elixirs.find(e => e.value === item.itemTypeValue2)?.label }}
              </span>
              <span v-show="item.itemTypeValue1 === 'summoning'">
                {{ store.summonings.find(s => s.value === item.itemTypeValue2)?.label }}
              </span>
            </div>
          </q-card-section>
          <q-card-section class="no-padding">
            <q-img :src="imgSrc(item)" alt="Tradurs Item Image" width="30%" />
          </q-card-section>
          <q-card-section class="q-pa-xl">
            <q-chip dense size="lg" color="white" class="price full-width">
              <div class="row items-center full-width no-wrap"
                :class="item.price.currency !== 'offer' ? 'justify-between' : 'justify-center'">
                <template v-if="item.price.currency !== 'offer'">
                  <q-img :src="currencyValueImg(item)" alt="Tradurs Currency Image" width="36px" />
                  <div class="col-1"></div>
                </template>
                <div class="col row q-gutter-xs items-center no-wrap"
                  :class="item.price.currency !== 'offer' ? 'justify-end' : 'justify-center'">
                  <div class="ellipsis">
                    {{ priceName(item) }}
                  </div>
                  <div v-if="item.price.quantity !== 1">
                    x {{ item.price.quantity }}</div>
                </div>
              </div>
            </q-chip>
          </q-card-section>
        </q-card>
      </q-intersection>
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

.item-wrap {
  min-height: 400px;
}

.item-card {
  color: white;
  border-radius: 50px;
  background: url('/images/back.webp');
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  filter: brightness(1.4);
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 700 !important;
  text-align: center;
}

.price {
  border-radius: 30px;
  font-size: 20px !important;
  padding: 30px 20px !important;
}
</style>