<template>
  <div class="github-edit-wrapper" v-if="showButton">
    <a
      :href="editUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="github-edit-btn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 2C4.686 2 2 4.686 2 8c0 2.21 1.136 4.107 2.85 5.25l-.79 2.37a.75.75 0 0 0 1.02.89l2.48-1.07A5.96 5.96 0 0 0 8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6zm.25 8.25L6.5 12 5 10.75l1.75-1.5L5 7.75 6.5 6.5l1.75 1.5L10 6.75l-1.75 1.5L10 9.75z"/>
      </svg>
      在 GitHub 上编辑此页
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

const showButton = computed(() => {
  return page.value?.filePath && frontmatter.value?.editLink !== false
})

const editUrl = computed(() => {
  const repo = 'hpp-bot/vite-docs'
  const branch = 'main'
  const filePath = page.value?.filePath?.replace(/^docs\//, '') || ''
  return `https://github.com/${repo}/edit/${branch}/docs/${filePath}`
})
</script>
