<template>
  <Container>
    <h2>武將列表</h2>
    <Pagination :items="paginationItems" @indexChange="getRoles" />
    <CountryRoles :roles="currentRoles" />
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'
import Container from '@/components/Container.vue'
import Pagination from '@/components/Pagination.vue'
import CountryRoles from '@/components/CountryRoles.vue'
import RolesInfo from "../assets/json/roles";

export default defineComponent({
  name: 'Roles',
  components: {
    Container,
    Pagination,
    CountryRoles
  },
  setup() {
    const currentPageIndex = ref(0)

    const paginationItems = reactive([
      { text: "魏" },
      { text: "蜀" },
      { text: "吳" },
      { text: "群" },
    ]);

    const currentRoles = computed(() => {
      const country = paginationItems[currentPageIndex.value].text

      return RolesInfo[country]
    })

    const getRoles = (index: number) => {
      currentPageIndex.value = index
    };

    return {
      paginationItems,
      currentRoles,
      getRoles,
    }
  }
})
</script>