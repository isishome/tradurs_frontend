<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  dataAdClient: {
    type: String,
    default: 'ca-pub-5110777286519562'
  },
  dataAdSlot: {
    type: String,
    required: true
  },
  dataAdFormat: {
    type: String,
    default: null
  },
  dataAdtest: {
    type: Boolean,
    default: null
  },
  dataFullWidthResponsive: {
    type: String,
    default: null
  }
})

let timer
const repeat = ref(0)
const render = () => {
  repeat.value++
  if (repeat.value > props.repeat) clearTimeout(timer)
  else if (!!window?.adsbygoogle) (window.adsbygoogle || []).push({})
  else
    timer = setTimeout(() => {
      render()
    }, 200)
}

// const load = () => {
//   const adURL = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${props.dataAdClient}`
//   const script = document.createElement('script')
//   script.src = adURL

//   script.async = true
//   script.crossOrigin = 'anonymous'

//   if (!document.head.querySelector(`script[src="${adURL}"]`))
//     document.head.appendChild(script)
// }

// onBeforeMount(() => {
//   load()
// })

onMounted(() => {
  render()
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <ins class="adsbygoogle ins" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot" :data-ad-format="dataAdFormat"
    :data-adtest="dataAdtest ? 'on' : null" :data-full-width-responsive="dataFullWidthResponsive"></ins>
</template>

<style scoped>
.ins {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  background-color: rgba(0, 0, 0, 0.02) !important;
  position: relative;
  min-height: 200px;
}

.ins::after {
  content: '광고';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.2);
}

.body--dark .ins {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  background-color: rgba(255, 255, 255, 0.02) !important;
}

.body--dark .ins::after {
  color: rgba(255, 255, 255, 0.2);
}

.ins[data-ad-status='unfilled'] {
  display: none !important;
}
</style>
