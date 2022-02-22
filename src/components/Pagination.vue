<template>
  <div id="pagination-header">
    <span
      v-for="(info, index) in itemsInfo"
      :key="info.text"
      :class="info.class"
      @click="setIndex(index)"
    >
      {{ info.text }}
    </span>
  </div>
  <div id="slot-body">
    <slot :name="`pagination-${currentIndex}`">
      <span v-if="noContent">分頁{{ currentIndex }} 沒有內容</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted } from "vue";

export default defineComponent({
  name: 'Pagination',
  props: {
    items: {
      type: Array as PropType<PaginationItem[]>,
      default: () => [],
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    noContent: {
      type: Boolean,
      default: false
    }
  },
  emits: ['indexChange'],
  setup(props, context) {
    const currentIndex = ref(props.defaultIndex);

    const itemsCount = computed(() => {
      return `${100 / props.items.length}%`;
    });

    const itemsInfo = computed(() => {
      return Array.from({ length: props.items.length }, (_, index) => {
        let el = props.items[index];
    
        return Object.assign({}, el, {
          class: {
            "item-selected": index == currentIndex.value,
          },
        });
      });
    });

    const setIndex = (index: number) => {
      currentIndex.value = index;
      context.emit("indexChange", index);
    };

    onMounted(() => {
      context.emit("indexChange", currentIndex.value);
    });

    return {
      currentIndex,
      itemsCount,
      itemsInfo,
      setIndex,
    }
  }
})
</script>

<style lang="scss" scoped>
#pagination-header {
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.1rem;

  > span {
    width: v-bind(itemsCount);
    border-bottom: solid 1px;
    cursor: pointer;

    &.item-selected {
      border: solid 1px;
      border-bottom: 0px;
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
  }
}

#slot-body {
  margin: 20px;
}
</style>