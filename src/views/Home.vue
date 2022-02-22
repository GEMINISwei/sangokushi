<template>
  <h2>三國志戰略版</h2>
  <div id="bottom-info">
    <span>Version: {{ version }}</span>
    <span>最後更新日期: {{ updateTime }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const version = ref('1.0.2')
    const updateTime = ref('2022-02-22')

    return {
      version,
      updateTime
    }
  }
})
</script>

<style lang="scss" scoped>
#bottom-info {
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 20px;
  justify-content: flex-end;
  align-items: center;
  

  > span {
    margin: 0 20px;
  }
}
</style>