<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'

defineOptions({ name: 'LaChelein' })

const { t } = useI18n()

type IconName = 'angel' | 'bed' | 'box' | 'clock' | 'mirror' | 'phonograph' |
  'piano' | 'sofa' | 'wardrobe' | ''

const ICON_OPTIONS: IconName[] = ['angel', 'bed', 'box', 'clock', 'mirror', 'phonograph', 'piano', 'sofa', 'wardrobe']

const gridList = ref<IconName[]>([])

function resetGridList() {
  gridList.value = Array.from({ length: 9 }).map(() => '')
}
resetGridList()

const waitUse = computed(() => ICON_OPTIONS.filter(i => !gridList.value.includes(i)))
const TemplatePromise = createTemplatePromise<IconName | null, [number, number]>()

async function setGridItem(e: MouseEvent, idx: number) {
  if (waitUse.value.length === 0)
    return
  const { clientX, clientY } = e
  const result = await TemplatePromise.start(clientX, clientY)
  if (result)
    gridList.value[idx] = result
  if (waitUse.value.length === 1) {
    const last = waitUse.value[0]
    const lastIdx = gridList.value.findIndex(i => !i)
    gridList.value[lastIdx] = last
  }
}
</script>

<template>
  <ul class="lachelein-bg" grid grid-cols-3 grid-rows-3 m-auto h-60 w-60 items-center justify-center gap-2>
    <li v-for="(item, idx) in gridList" :key="idx" h-full w-full overflow-hidden b-rd-2 @click="setGridItem($event, idx)">
      <img v-if="item" h-full w-full :src="`/assets/lachelein/${item}.png`">
    </li>
  </ul>
  <button mt-5 btn @click="resetGridList">
    {{ t('button.reset') }}
  </button>
  <TemplatePromise v-slot="{ resolve, args }">
    <OnClickOutside @trigger="resolve">
      <div fixed inset-0 z-30 flex items-center @click="resolve(null)">
        <ul
          b="~ 1 gray-500" bg="gray-200 dark:gray-700" absolute grid grid-cols-3 m-auto gap-2 b-rd-2 bg-opacity-80 p-2
          :style="{ left: `${args[0]}px`, top: `${args[1]}px` }"
        >
          <li v-for="(item, idx) in waitUse" :key="idx" overflow-hidden b-rd-2 @click="resolve(item)">
            <img v-if="item" :src="`/assets/lachelein/${item}.png`">
          </li>
        </ul>
      </div>
    </OnClickOutside>
  </TemplatePromise>
</template>

<style scoped>
.lachelein-bg {
  background: url('/assets/lachelein/grid.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
