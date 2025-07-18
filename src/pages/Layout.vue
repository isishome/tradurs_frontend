<script setup>
import { inject, ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores/global'
import { useAccountStore } from '@/stores/account'

const prod = import.meta.env.PROD

const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
const globalStore = useGlobalStore()
const accountStore = useAccountStore()

// const leftDrawerOpen = ref(false)
const signed = computed(() => accountStore.signed)
const screen = computed(() => $q.screen)
const offsetTop = ref(0)
const asideHeight = computed(() => `calc(100vh - ${screen.value.gt.sm ? offsetTop.value : 0}px)`)
const asideTop = computed(() => `${offsetTop.value + 10}px`)

const myTweak = (offset) => {
  offsetTop.value = offset || 0
}

const sign = () => {
  if (!signed.value) {
    router.push({ name: 'Sign', params: { lang: route.params.lang } })
    return
  }

  axios.get('/account/signOut')
    .then(() => {
      accountStore.signed = false
      accountStore.info = {}
      router.go()
    })
    .catch(() => {
    })
}

const setLang = (lang) => {
  router.replace({ name: route.name, params: { lang } })
    .catch(() => { })
    .then(() => {
      router.go(0)
    })
}

const topRef = ref()
const bottomRef = ref()
const rightRef = ref()
const topKey = ref(0)
const bottomKey = ref(0)
const rightKey = ref(0)
const reload = () => {
  if (Date.now() - globalStore.topAccessTimeStamp > globalStore.timeLimit || topRef.value?.$el?.getAttribute('data-ad-status') === 'unfilled') {
    topKey.value++
    globalStore.topAccessTimeStamp = Date.now()
  }

  if (Date.now() - globalStore.bottomAccessTimeStamp > globalStore.timeLimit || bottomRef.value?.$el?.getAttribute('data-ad-status') === 'unfilled') {
    bottomKey.value++
    globalStore.bottomAccessTimeStamp = Date.now()
  }

  if (Date.now() - globalStore.rightAccessTimeStamp > globalStore.timeLimit || rightRef.value?.$el?.getAttribute('data-ad-status') === 'unfilled') {
    rightKey.value++
    globalStore.rightAccessTimeStamp = Date.now()
  }
}

watch(() => route.name, (val, old) => {
  if (val && val !== old)
    reload()
})

watch(() => $q.screen.gt.md, (val, old) => {
  if (val !== old) {
    topKey.value++
    bottomKey.value++
    rightKey.value++
    globalStore.topAccessTimeStamp = Date.now()
    globalStore.bottomAccessTimeStamp = Date.now()
    globalStore.rightAccessTimeStamp = Date.now()
  }
})

const size = computed(() => $q.screen.width < 320 ? 'width:300px;max-height:100px;' : $q.screen.width < 468 ? 'width:320px;max-height:100px;' : $q.screen.width < 728 ? 'width:468px;height:60px;' : 'width:728px;height:90px;')

</script>
<template>
  <q-layout view="hHh lpR lFf">
    <!-- <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :behavior="screen.gt.sm ? 'desktop' : 'mobile'"
      class="row justify-end" :width="280">
      <div class="q-py-lg" :class="screen.gt.md ? 'q-px-lg' : 'q-px-md'"
        :style="`overflow-y:scroll;width:280px;height:${asideHeight}`">
      </div>
    </q-drawer> -->
    <q-header bordered class="bg-white text-secondary q-py-md header row justify-center">
      <q-toolbar class="toolbar">
        <div class="col-3 row items-center">
          <q-btn class="gt-sm no-hover" dense flat padding="0" :ripple="false"
            :to="{ name: 'Main', params: { lang: route.params.lang } }">
            <div class="row justify-center q-gutter-x-xs items-center">
              <img src="/images/tradurs_logo.svg" width="28" />
              <img src="/images/tradurs_text.svg" height="20" />
            </div>
          </q-btn>
          <!-- <q-btn dense flat round class="lt-md" :ripple="false" @click="leftDrawerOpen = !leftDrawerOpen">
            <img src="@/assets/menu.svg" class="icon" height="24" />
          </q-btn> -->
        </div>
        <div class="col row justify-center">
          <q-btn class="lt-md no-hover" dense flat padding="0" :ripple="false"
            :to="{ name: 'Main', params: { lang: route.params.lang } }">
            <img src="/images/tradurs_logo.svg" width="32" />
          </q-btn>
          <!-- <q-tabs dense class="gt-sm q-px-md bg-transparent text-secondary no-hover">
            <q-route-tab :ripple="false" :href="d2r" label="GAME" exact />
          </q-tabs> -->
        </div>
        <q-btn-group class="col-3 justify-end" :class="screen.gt.sm ? 'q-gutter-x-md' : 'q-gutter-x-sm'" rounded flat>
          <q-btn flat dense :ripple="false">
            <img class="icon" width="24" src="@/assets/icons/language.svg" />
            <q-menu auto-close class="no-shadow" anchor="bottom end" self="top end" transition-show="none"
              transition-hide="none" :transition-duration="0">
              <q-list bordered class="rounded-borders">
                <q-item v-for="lang in globalStore.localeOptions" :key="lang.value" clickable
                  :active="lang.value === locale" @click="setLang(lang.value)">
                  {{ lang.label }}</q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn v-if="signed" flat dense :ripple="false" :to="{ name: 'Info', params: { lang: route.params.lang } }">
            <img class="icon" width="24" src="@/assets/icons/setting.svg" />
          </q-btn>
          <q-btn flat dense :ripple="false" @click="sign">
            <img v-if="signed" class="icon" width="24" src="@/assets/icons/logout.svg" />
            <img v-else class="icon" width="24" src="@/assets/icons/login.svg" />
          </q-btn>
        </q-btn-group>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page :style-fn="myTweak">
        <div class="row justify-center">
          <div :class="screen.lt.sm ? 'q-pa-sm' : 'q-pa-xl'" :style="screen.lt.sm ? 'width:100%' : 'width:824px'">
            <div class="row justify-center top-ads">
              <Adsense v-if="!accountStore.noAds" ref="topRef" :style="size" data-ad-slot="3025920602"
                :data-adtest="!prod" data-ad-format="horizontal" data-full-width-responsive="false" :key="topKey" />
            </div>
            <RouterView />
            <div class="q-py-xl"></div>
            <Adsense v-if="$q.platform.is.mobile && !accountStore.noAds" ref="bottomRef" style="display:block"
              data-ad-slot="3229008690" :data-adtest="!prod" data-full-width-responsive="true" :key="bottomKey" />
            <q-separator />
            <div class="q-pt-lg">
              <div class="row justify-center items-center q-gutter-xs text-caption bottom">
                <div>Copyright</div>
                <div>@</div>
                <div>2023</div>
                <q-btn class="no-hover" no-caps flat dense aria-label="Serasome Home Button" padding="0" :ripple="false"
                  href="https://serasome.com" target="_blank" rel="noopener noreferrer">SeraSome</q-btn>
              </div>
            </div>
          </div>
          <div class="gt-sm col">
            <div class="full-height q-px-lg q-py-xl" :style="`width:280px;height:${asideHeight}`">
              <div :style="`position:sticky;top:${asideTop}`">
                <Adsense v-if="!accountStore.noAds" ref="rightRef" style="display:inline-block;width:160px;height:600px"
                  data-ad-slot="5460512257" :data-adtest="!prod" data-full-width-responsive="false" :key="rightKey" />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
.header:deep(.q-btn .icon) {
  filter: contrast(30%);
}

.toolbar {
  min-height: inherit;
  width: 100vw;
  max-width: 1400px;
}

.top-ads {
  margin-bottom: 48px;
}

@media (max-width:600px) {
  .top-ads {
    margin: 12px 0;
  }
}
</style>