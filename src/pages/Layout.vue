<script setup>
import { inject, ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuasar, uid } from 'quasar'
import { useAccountStore } from '@/stores/account'

const prod = import.meta.env.PROD


const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const $q = useQuasar()
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

const onWindowLoad = () => {
  if (prod.value) {
    const adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({})
    adsbygoogle.push({})
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
              <img src="@/assets/logo_small.webp" width="30" />
              <img src="@/assets/logo.webp" height="20" />
            </div>
          </q-btn>
          <!-- <q-btn dense flat round class="lt-md" :ripple="false" @click="leftDrawerOpen = !leftDrawerOpen">
                      <img src="@/assets/menu.svg" class="icon" height="24" />
                    </q-btn> -->
        </div>
        <div class="col row justify-center">
          <q-btn class="lt-md no-hover" dense flat padding="0" :ripple="false" :to="{ name: 'Main' }">
            <img src="@/assets/logo_small.webp" width="30" />
          </q-btn>
          <!-- <q-tabs dense class="gt-sm q-px-md bg-transparent text-secondary no-hover">
                      <q-route-tab :ripple="false" :href="d2r" label="GAME" exact />
                    </q-tabs> -->
        </div>
        <q-btn-group class="col-3 justify-end" :class="screen.gt.sm ? 'q-gutter-x-md' : 'q-gutter-x-sm'" rounded flat>
          <q-btn v-if="signed" flat dense :ripple="false" :to="{ name: 'Info' }">
            <img class="icon" width="24" src="@/assets/setting.svg" />
          </q-btn>
          <q-btn flat dense :ripple="false" @click="sign">
            <img v-if="signed" class="icon" width="24" src="@/assets/logout.svg" />
            <img v-else class="icon" width="24" src="@/assets/login.svg" />
          </q-btn>
        </q-btn-group>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page :style-fn="myTweak">
        <div class="row">
          <div :class="screen.gt.md ? 'q-pa-xl' : 'q-px-md q-py-lg'" :style="screen.gt.md ? 'width:830px' : 'width:100%'">
            <RouterView />
          </div>
          <div class="gt-md col">
            <div class="full-height q-px-lg q-py-xl" :style="`width:280px;height:${asideHeight}`">
              <div :style="`position:sticky;top:${asideTop}`">
                <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px"
                  data-ad-client="ca-pub-5110777286519562" data-ad-slot="7240136439" :data-adtest="prod ? 'off' : 'on'"
                  :key="key"></ins>
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
  min-height: 200px;
}

ins::after {
  content: 'AD';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .2);
}
</style>