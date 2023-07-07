import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { instance } from '@/axios'
import { Quasar, Cookies, Notify, Dialog } from 'quasar'
import { router } from '@/router'
import { i18n } from './i18n'
import Title from '@/components/paragraph/Title.vue'

// Import icon libraries
//import '@quasar/extras/roboto-font/roboto-font.css'
//import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Base css
import '@/assets/base.css'

createApp(App).provide('axios', instance).use(Quasar, {
  plugins: { Cookies, Notify, Dialog }, // import Quasar plugins and add here
  config: {
    notify: {
      position: 'top'
    }
  }
}).use(createPinia()).use(router).use(i18n)
  .component('Title', Title)
  .mount('#app')
