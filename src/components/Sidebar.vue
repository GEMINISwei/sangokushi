<template>
  <div id="sidebar">
    <div v-for="item in sidebarItems" :key="item.text">
      <span @click="goPage(item)">{{ item.text }}</span>
    </div>
  </div>
  <div
    id="sidebar-toggle"
    :class="{ open: isSidebarOpen }"
    @click="sidebarChangeState"
  >
    <span v-for="i in 3" :key="i" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    sidebarItems: {
      type: Array as PropType<SidebarItem[]>,
      default: () => []
    }
  },
  setup() {
    const router = useRouter();

    const isSidebarOpen = ref(false);
    
    const sidebarLeft = computed(() => {
      return isSidebarOpen.value ? "0px" : "-150px";
    });
    
    const sidebarChangeState = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };
    const goPage = (info: SidebarItem) => {
      router.push({ name: info.name });
      isSidebarOpen.value = false;
    };

    return {
      isSidebarOpen,
      sidebarLeft,
      sidebarChangeState,
      goPage,
    }
  }
})
</script>

<style lang="scss" scoped>
#sidebar {
  position: absolute;
  left: v-bind(sidebarLeft);
  top: 0;
  min-width: 150px;
  height: 100vh;
  background-color: rgb(45, 45, 45);
  transition: left 0.75s ease-out;

  > div {
    text-align: center;
    margin: 15px;

    > span {
      cursor: pointer;
    }
  }
}

#sidebar-toggle {
  position: absolute;
  width: 30px;
  top: 10px;
  left: 10px;
  cursor: pointer;
  transition: left 0.75s ease-out;

  &.open {
    left: 160px;

    span:nth-child(1) {
      width: 66%;
      transform: rotate(45deg);
      transform-origin: 0%;
    }
    span:nth-child(2) {
      width: 50%;
      opacity: 0;
    }
    span:nth-child(3) {
      width: 66%;
      transform: rotate(-45deg);
      transform-origin: 0%;
    }
  }

  span {
    display: block;
    width: 100%;
    height: 4px;
    margin-top: 3px;
    border-radius: 2px;
    background-color: #fff;
    transition: all 0.5s ease-out;
  }
}
</style>