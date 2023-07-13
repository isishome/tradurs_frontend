<script setup>
import { inject, ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar, uid } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useAccountStore } from '@/stores/account'

const prod = import.meta.env.PROD

const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
const { locale } = useI18n({ useScope: 'global' })
const accountStore = useAccountStore()

const leftDrawerOpen = ref(false)
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
    router.push({ name: 'Sign' })
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

const localeOptions = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' }
]

const setLang = (lang) => {
  locale.value = lang
  $q.cookies.set('tradurs.lang', lang)
  axios.defaults.headers.common['Accept-Language'] = lang
}

const key = ref(uid())
const reload = () => {
  key.value = uid()
  nextTick(() => {
    onWindowLoad()
  })
}

watch(() => route.name, (val, old) => {
  if (val && val !== old)
    reload()
})

const size = computed(() => $q.screen.width < 320 ? 'width:300px;max-height:100px;' : $q.screen.width < 758 ? 'width:320px;max-height:100px;' : 'width:728px;height:90px;')

const onWindowLoad = () => {
  if (prod) {
    const adsbygoogle = window.adsbygoogle || []
    const ads = document.querySelectorAll('ins.adsbygoogle')
    ads.forEach((a) => {
      if (a.clientWidth + a.clientHeight > 0)
        adsbygoogle.push({})
    })
  }
}

onMounted(() => {
  if (document.readyState !== 'complete')
    window.addEventListener("load", onWindowLoad)
  else {
    nextTick(() => {
      onWindowLoad()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener("load", onWindowLoad)
})
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
          <q-btn class="gt-sm no-hover" dense flat padding="0" :ripple="false" :to="{ name: 'Main' }">
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
          <q-btn class="lt-md no-hover" dense flat padding="0" :ripple="false" :to="{ name: 'Main' }">
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
                <q-item v-for="lang in localeOptions" :key="lang.value" clickable :active="lang.value === locale"
                  @click="setLang(lang.value)">
                  {{ lang.label }}</q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn v-if="signed" flat dense :ripple="false" :to="{ name: 'Info' }">
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
              <ins class="adsbygoogle" :style="`display:inline-block;${size}`" data-ad-client="ca-pub-5110777286519562"
                data-ad-slot="3025920602" :data-adtest="prod ? 'off' : 'on'" :key="`top-${key}`"></ins>
            </div>
            <RouterView />
          </div>
          <div class="gt-sm col">
            <div class="full-height q-px-lg q-py-xl" :style="`width:280px;height:${asideHeight}`">
              <div :style="`position:sticky;top:${asideTop}`">
                <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px"
                  data-ad-client="ca-pub-5110777286519562" data-ad-slot="5460512257" :data-adtest="prod ? 'off' : 'on'"
                  :key="`right-${key}`"></ins>
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

ins {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05) !important;
  background-color: rgba(0, 0, 0, .02) !important;
  position: relative;
  min-height: 50px;
}

ins::after {
  content: 'AD';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .2);
  opacity: .6;
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