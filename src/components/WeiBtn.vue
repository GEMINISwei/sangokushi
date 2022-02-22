<template>
  <button>{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      default: '尚未設定'
    }
  },
})
</script>

<style lang="scss" scoped>
button {
  border-radius: 0.66rem;
  padding: 8px 16px;
  border-color: gray;
  background-color: rgb(30, 25, 25);
  cursor: pointer;
}
</style>