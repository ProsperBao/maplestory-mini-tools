<script setup lang="ts">
import type { CountdownInst } from 'naive-ui'
import type { Buff } from '~/pages/countdown'

const props = withDefaults(defineProps<{
  item: Buff
  layout?: string
  background?: boolean
  size?: string
}>(), {
  layout: '',
  size: '32px',
})

const emit = defineEmits(['finish'])

const { t } = useI18n()

const countdownRef = ref<CountdownInst | null>()

const name = computed(() => {
  const { item } = toRefs(props)
  const { prefix, key, suffix } = item.value
  const prefixText = prefix ? `${t(prefix)} ` : ''
  const keyText = key ? t(key) : ''
  const suffixText = suffix ? ` ${t(suffix)}` : ''
  return prefixText + keyText + suffixText
})

function handleReset() {
  countdownRef.value?.reset()
}

watch(() => props.item.end, (val) => {
  val && handleReset()
})
const adjustDuration = computed(() => {
  const { item } = toRefs(props)
  return item.value.duration - (item.value.adjust || 0)
})
</script>

<template>
  <div :class="layout">
    <cutdown-icon :item="item" :background="background" :size="size" />
    <div flex flex-1 flex-col text-left>
      <div ws-nowrap>
        {{ name }}
      </div>
      <div flex items-center gap-2>
        <slot name="operate" />
        <n-countdown v-if="item.end" ref="countdownRef" :key="adjustDuration" :duration="adjustDuration * 1000" :precision="2" @finish="emit('finish')" />
      </div>
    </div>
  </div>
</template>
