<script setup lang="ts">
import { darkTheme } from 'naive-ui'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'MapleStory Widget',
  meta: [
    {
      name: 'description',
      content: 'a MapleStory widget',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : ''">
    <RouterView />
  </n-config-provider>
</template>
