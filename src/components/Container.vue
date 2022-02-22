<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: 'Container',
  props: {
    width: {
      type: Number,
      default: 80
    }
  },
  setup(props) {
    const containerStyle = computed(() => {
      return {
        width: `${props.width}%`
      }
    })

    return {
      containerStyle
    }
  }
})
</script>

<style lang="scss" scoped>
div {
  width: v-bind('containerStyle.width');
  margin: 0 auto;
}
</style>