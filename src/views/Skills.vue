<template>
  <Container>
    <h2>{{ pageTitle }}</h2>
    <Pagination :items="paginationItems" @indexChange="indexChange" />
    <div>
      <div class="skill-row">
        <span>戰法名稱</span>
        <span>戰法類別</span>
        <span>發動機率</span>
        <span>戰法敘述</span>
        <span></span>
      </div>
      <hr />
      <div v-for="skill in currentList" :key="skill.name" class="skill-row">
        <span>{{ skill.name }}</span>
        <span>{{ skill.type }}戰法</span>
        <span>{{ skill.rate }}%</span>
        <span>
          <template v-for="description in skill.descriptions" :key="description">
            <span v-html="setDescription(description, skill.values)" />
            <br>
          </template>
        </span>
        <span class="link">詳細→</span>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, onUnmounted } from 'vue'
import Container from '@/components/Container.vue'
import Pagination from '@/components/Pagination.vue'
import SkillsInfo from "@/assets/json/skills/index.ts";
import { currentSkill, setSkill } from '@/utils/skills.ts'

export default defineComponent({
  name: 'Skills',
  components: {
    Container,
    Pagination
  },
  setup() {
    const currentIndex = ref(0)
    const paginationItems = reactive([
      { text: "自帶戰法" },
      { text: "傳承戰法" },
      { text: "事件戰法" },
    ])
    const pageTitle = computed(() => currentSkill.value ? '戰法資訊' : '戰法列表')
    const currentList = computed(() => {
      const skillSource = paginationItems[currentIndex.value].text

      return SkillsInfo.filter((info: Skill) => info.source == skillSource)
    })

    const indexChange = (index: number) => {
      currentIndex.value = index
    }
    const setDescription = (description: string, values: string[]) => {
      let newDescription = description;

      values.forEach((value, index) => {
        newDescription = newDescription.replace(
          `{value${index}}`,
          `<span class="value-color">${value}</span>`
        );
      });

      return newDescription;
    };

    onUnmounted(() => {
      setSkill('')
      console.log(123)
    })

    return {
      pageTitle,
      paginationItems,
      currentList,
      indexChange,
      setDescription,
    }
  }
})
</script>

<style lang="scss" scoped>
.skill-row {
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
    margin: 10px;
    text-align: center;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      width: 10%;
    }
    &:nth-child(4) {
      width: 65%;
    }
    &:nth-child(5) {
      width: 5%;
    }
  }
}

:deep(.value-color) {
  color: skyblue;
}
</style>