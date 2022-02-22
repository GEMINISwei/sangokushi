import { reactive } from 'vue'
import BlueRoles from "@/assets/json/roles/blue.json";
import GreenRoles from "@/assets/json/roles/green.json";
import RedRoles from "@/assets/json/roles/red.json";
import YellowRoles from "@/assets/json/roles/yellow.json";

const allRoles: CountryRoles = reactive({
  魏: BlueRoles as Role[],
  蜀: GreenRoles as Role[],
  吳: RedRoles as Role[],
  群: YellowRoles as Role[]
})

export {
  allRoles,
}