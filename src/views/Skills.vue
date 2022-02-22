<template>
  <Container>
    <h2>{{ pageTitle }}</h2>
    <SkillInfo v-if="currentSkill" />
    <SkillsList v-else />
  </Container>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Container from '@/components/Container.vue'
import SkillInfo from '@/components/SkillInfo.vue'
import SkillsList from '@/components/SkillsList.vue'
import { currentSkill } from '@/utils/skills.ts'


export default defineComponent({
  name: 'Skills',
  components: {
    Container,
    SkillInfo,
    SkillsList,
  },
  setup() {
    const pageTitle = computed(() => currentSkill.value ? '戰法資訊' : '戰法列表')
    
    return {
      pageTitle,
      currentSkill
    }
  }
})
</script>