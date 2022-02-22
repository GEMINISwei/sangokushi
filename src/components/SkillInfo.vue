<template>
  <WeiBtn text="戰法列表" @click="setSkill('')" />
  <h2>{{ currentSkillInfo.name }}</h2>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import WeiBtn from "./WeiBtn.vue";
import { currentSkillInfo, setSkill } from "@/utils/skills.ts";

export default defineComponent({
  name: 'SkillInfo',
  components: {
    WeiBtn
  },
  setup() {
    onUnmounted(() => {
      setSkill('')
    })

    return {
      currentSkillInfo,
      setSkill
    }
  }
})
</script>

<style lang="scss" scoped>
h2 {
  color: skyblue;
}
</style>