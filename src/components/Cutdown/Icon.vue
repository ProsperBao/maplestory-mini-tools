<script setup lang="ts">
import dayjs from 'dayjs'
import type { Buff } from '~/pages/countdown/index.ts'

const props = withDefaults(defineProps<{
  item: Buff
  background?: boolean
  size?: string
}>(), {
  size: '32px',
})

const remain = ref(0)
const timer = ref<NodeJS.Timeout | null>(null)
function setRemain() {
  if (timer.value)
    clearInterval(timer.value)

  timer.value = setInterval(() => {
    if (props.item.end) {
      const end = dayjs(props.item.end)
      const now = dayjs()
      const duration = end.diff(now, 'second')
      const res = (1 - (duration / props.item.duration)) * 100
      remain.value = res > 100 ? 100 : res
    }
  }, 100)
}
watch(() => props.item.end, () => {
  setRemain()
}, { immediate: true })
</script>

<template>
  <div flex-shrink-0 :class="{ 'image-wrap b b-#7e7e7e rd-3 p-2 shadow ': background }">
    <div relative overflow-hidden rd-2>
      <img :src="item.icon" bg="#cfcfcf" object-contain :style="{ width: size, height: size }" alt="">
      <div v-if="item.end" absolute bottom-0 left-0 w-full bg-black opacity-60 filter-blur-2 :style="{ height: `${remain}%` }" />
    </div>
  </div>
</template>

<style scoped>
.image-wrap {
  background: linear-gradient(180deg, #515151 0%, #bbbbbb 100%);

}
</style>
