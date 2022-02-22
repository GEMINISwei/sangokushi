<template>
  <div id="roles-btns">
    <WeiBtn v-for="btn in btns" :key="btn.text" :text="btn.text" @click="btn.method" />
  </div>
  
  <div id="roles-area">
    <div v-for="role in roles" :key="role.name" class="role-block">
      <div class="role-header">
        <img :src="getRoleImgUrl(role.name)" width="160" height="230" />
        <div>
          <div class="skill-block">
            <span>自帶戰法</span>
            <span class="link" @click="goSkillPage(role.skill.self)">
              {{ role.skill.self }}
            </span>
          </div>

          <div class="skill-block">
            <span>傳承戰法</span>
            <span class="link" @click="goSkillPage(role.skill.inherited)">
              {{ role.skill.inherited }}
            </span>
          </div>
        </div>
      </div>

      <div class="role-arms">
        <template v-for="armInfo in role.arms" :key="armInfo.job">
          <span :data-value="armInfo.value">{{ armInfo.job }}{{ armInfo.value }}</span>
        </template>
      </div>

      <div class="role-attrs">
        <template v-for="attrInfo in role.attrs" :key="attrInfo.attr">
          <span :style="attrInfo.style">
            {{ attrInfo.attr }}: {{ attrInfo.value }}
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import WeiBtn from "./WeiBtn.vue";
import { useRouter } from "vue-router";
import { setSkill } from '../utils/skills'

export default defineComponent({
  name: 'CountryRoles',
  components: {
    WeiBtn
  },
  props: {
    roles: {
      type: Array as PropType<Role[]>,
      default: () => [],
    },
  },
  setup(props) {
    const router = useRouter();

    const isMaxLevel = ref(false);
    const currentType = ref('軍事');

    const roles = computed(() => {
      return props.roles.filter(role => role.type == currentType.value).map((role) => {
        const newAttrs = role.attrs.map((attr: RoleAttribute) => {
          const growpValue = isMaxLevel.value ? attr.coefficient * 49 : 0;

          return Object.assign({}, attr, {
            value: (attr.value + growpValue).toFixed(2),
            style: {
              color: attr.value + growpValue >= 200 ? "red" : "",
            },
          });
        });

        return Object.assign({}, role, {
          attrs: newAttrs,
        });
      });
    });

    const btns = computed(() => {
      return [
        { text: isMaxLevel.value ? "初始數值" : "最大數值", method: changeMode },
        { text: currentType.value, method: changeType },
      ]
    })

    const changeMode = () => {
      isMaxLevel.value = !isMaxLevel.value;
    };
    const changeType = () => {
      currentType.value = currentType.value == '軍事' ? '內政' : '軍事'
    }
    const getRoleImgUrl = (name: string) => {
      return new URL(`../assets/img/roles/${name}.jpg`, import.meta.url).href;
    };

    const goSkillPage = (skillName: string) => {
      setSkill(skillName);
      router.push({ name: "Skills" });
    };

    return {
      roles,
      btns,
      changeMode,
      getRoleImgUrl,
      goSkillPage
    }
  }
})
</script>

<style lang="scss" scoped>
$arm-colors: (
  S: coral,
  A: mediumpurple,
  B: cornflowerblue,
  C: darkseagreen
);

#roles-btns {
  margin: 10px;
  
  > button {
    margin: 0 10px;
  }
}

#roles-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.role-block {
  width: 30%;
  min-width: 375px;
  margin: 10px;
  padding-bottom: 10px;
  border: solid 1px;
  border-radius: 0.5rem;
  text-align: center;

  .role-header {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin: 10px;
    }

    .skill-block {
      border: solid 1px;
      border-radius: 0.5rem;
      margin: 15px 5px;

      span {
        display: inline-block;
        width: 100%;
        margin: 5px;
        text-align: center;
      }
    }
  }
}

.role-arms {
  margin: 10px 0;

  > span {
    margin: 0 3%;

    @each $value, $color in $arm-colors {
      &[data-value='#{$value}'] {
        color: $color;
      }
    }
  }
}

.role-attrs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > span {
    margin: 5px 0;
    width: 40%;
    min-width: 100px;
  }
}
</style>