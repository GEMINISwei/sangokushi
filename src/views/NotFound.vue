<template>
  <h2>{{ pageDescription }}</h2>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NotFound',
  setup() {
    const pageDescription = ref("找不到此頁面")

    return {
      pageDescription
    }
  }
})
</script>