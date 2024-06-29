<script lang="ts" setup>
import { useSound } from '@vueuse/sound'
import dayjs from 'dayjs'
import type { Buff } from './index'
import { useBuffList } from './index'

const { list } = useBuffList()

const startList = ref<Buff[]>([])

const { t } = useI18n()
const { play, stop } = useSound('/assets/countdown/music.mp3')

function calcEnd(duration: number) {
  return dayjs().add(duration - 5, 'second').toISOString()
}

function handleAdd(idx: number) {
  const target = list.value[idx]
  startList.value.push({
    ...target,
    end: calcEnd(target.duration),
  })
}

function handleReset(idx: number) {
  const target = startList.value[idx]
  startList.value[idx].end = calcEnd(target.duration)
  stop()
}

function handlePlay() {
  stop()
  play()
}

function handleResetAll() {
  startList.value = startList.value.map(item => ({
    ...item,
    end: dayjs().add(item.duration, 'second').toISOString(),
  }))
  stop()
}

function handleClearAll() {
  startList.value = []
  stop()
}

const check = ref<number[]>([])
function handleClearCheck() {
  check.value = []
}
function handleQuick() {
  startList.value = JSON.parse(JSON.stringify(list.value.filter((_, idx) => check.value.includes(idx)).map(i => ({
    ...i,
    end: calcEnd(i.duration),
  }))))
}
</script>

<template>
  <section flex justify-center gap-2>
    <n-card w-150>
      <template #header>
        <div flex justify-center gap-2>
          {{ t('countdown.index.left') }}
          <n-button size="small" @click="stop()">
            {{ t('countdown.index.stop') }}
          </n-button>
          <n-button size="small" @click="handleResetAll">
            {{ t('countdown.index.resetall') }}
          </n-button>
          <n-button size="small" @click="handleClearAll">
            {{ t('countdown.index.clearall') }}
          </n-button>
        </div>
      </template>
      <cutdown-item
        v-for="item, idx in startList"
        :key="idx"
        :item="item"
        size="48px"
        layout="mb-2 w-full flex gap-2"
        @finish="handlePlay"
      >
        <template #operate>
          <n-button size="small" @click="handleReset(idx)">
            {{ t('countdown.index.reset') }}
          </n-button>
        </template>
      </cutdown-item>
    </n-card>
    <n-card w-80>
      <template #header>
        <div flex justify-center gap-2>
          {{ t('countdown.index.right') }}
          <n-button size="small" @click="handleQuick">
            {{ t('countdown.index.quick') }}
          </n-button>
          <n-button size="small" @click="handleClearCheck">
            {{ t('countdown.index.clear') }}
          </n-button>
        </div>
      </template>
      <n-checkbox-group v-model:value="check">
        <cutdown-item
          v-for="item, idx in list" :key="idx" :item="item"
          layout="mb-2 flex w-full gap-2 rd-2 w-50% flex-wrap"
          size="48px"
        >
          <template #operate>
            <n-checkbox :value="idx" />
            <n-button size="small" @click="handleAdd(idx)">
              {{ t('countdown.index.add') }}
            </n-button>
          </template>
        </cutdown-item>
      </n-checkbox-group>
    </n-card>
  </section>
</template>
