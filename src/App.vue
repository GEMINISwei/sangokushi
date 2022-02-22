<template>
  <Sidebar :sidebarItems="sidebarItems" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar
  },
  setup() {
    const sidebarItems = ref([
      { text: '首頁', name: 'Home' },
      { text: '武將', name: 'Roles' },
      { text: '戰法', name: 'Skills' }
    ])

    return {
      sidebarItems
    }
  }
})
</script>