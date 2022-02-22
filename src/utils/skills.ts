import { ref } from "vue";

const currentSkill = ref("");

const setSkill = (val: string) => {
  currentSkill.value = val;
};

export { currentSkill, setSkill };
