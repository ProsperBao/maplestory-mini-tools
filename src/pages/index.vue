<script setup lang="ts">
defineOptions({ name: 'Guide' })

const { t } = useI18n()

interface GuideItem {
  title: string
  desc: string
  path: string
  icon: string
}

const guideList = computed<GuideItem[]>(() => [
  {
    title: t('lachelein.guide.title'),
    desc: t('lachelein.guide.desc'),
    path: '/lachelein',
    icon: '/assets/lachelein/icon.png',
  },
  {
    title: t('countdown.guide.title'),
    desc: t('countdown.guide.desc'),
    path: '/countdown',
    icon: '/assets/countdown/icon.png',
  },
])
</script>

<template>
  <div>
    <ul m-auto mt-5 w-150 flex flex-wrap items-center justify-center gap-2>
      <RouterLink v-for="item in guideList" :key="item.path" v-slot="{ navigate }" custom :to="item.path">
        <li b="~ 1" w="49%" flex cursor-pointer items-center gap-4 b-rd-2 px-4 py-2 @click="navigate">
          <img :src="item.icon" :alt="item.title" h-6 w-6>
          <div text-left>
            <a :title="item.desc">
              {{ item.title }}
            </a>
            <p text="sm gray-500 dark:gray-400">
              {{ item.desc }}
            </p>
          </div>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>
