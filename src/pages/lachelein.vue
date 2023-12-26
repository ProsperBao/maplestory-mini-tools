<script setup lang="ts">
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
const TemplatePromise = createTemplatePromise<IconName | null, [number]>()
async function setGridItem(idx: number) {
  const result = await TemplatePromise.start(idx)
  if (result)
    gridList.value[idx] = result
}
</script>

<template>
  <ul class="lachelein-bg" grid grid-cols-3 grid-rows-3 m-auto h-60 w-60 items-center justify-center gap-2>
    <li v-for="(item, idx) in gridList" :key="idx" h-full w-full overflow-hidden b-rd-2 @click="setGridItem(idx)">
      <img v-if="item" h-full w-full :src="`/assets/lachelein/${item}.png`">
    </li>
  </ul>
  <button mt-5 btn @click="resetGridList">
    {{ t('button.reset') }}
  </button>
  <TemplatePromise v-slot="{ resolve }">
    <div class="fixed inset-0 z-30 flex items-center" @click="resolve(null)">
      <ul b="~ 1 gray-500" bg="gray-200 dark:gray-700" grid grid-cols-3 m-auto gap-2 b-rd-2 p-2>
        <li v-for="(item, idx) in waitUse" :key="idx" overflow-hidden b-rd-1 @click="resolve(item)">
          <img v-if="item" :src="`/assets/lachelein/${item}.png`">
        </li>
      </ul>
    </div>
  </TemplatePromise>
</template>

<style scoped>
.lachelein-bg {
  background: url('/assets/lachelein/grid.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
