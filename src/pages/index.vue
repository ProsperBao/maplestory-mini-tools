<script setup lang="ts">
defineOptions({ name: 'Guide' })

const { t } = useI18n()

interface GuideItem {
  title: string
  desc: string
  path: string
}

const guideList: GuideItem[] = [
  {
    title: t('lachelein.guide.title'),
    desc: t('lachelein.guide.desc'),
    path: '/lachelein',
  },
]
</script>

<template>
  <div>
    <ul>
      <li v-for="item in guideList" :key="item.path">
        <a :href="item.path" :title="item.desc">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
