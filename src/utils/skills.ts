import { ref, computed } from "vue";
import BlueSkills from "@/assets/json/skills/blue.json";
import GreenSkills from "@/assets/json/skills/green.json";
import RedSkills from "@/assets/json/skills/red.json";
import YellowSkills from "@/assets/json/skills/yellow.json";

const currentSkill = ref("");
const allSkills: Skill[] = BlueSkills.concat(GreenSkills, RedSkills, YellowSkills);

const currentSkillInfo = computed(() => {
  return allSkills.find((skill: Skill) => skill.name == currentSkill.value)
})

const setSkill = (name: string) => {
  currentSkill.value = name;
};

export {
  allSkills,
  currentSkill,
  currentSkillInfo,
  setSkill
};
