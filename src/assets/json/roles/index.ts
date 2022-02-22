import BlueRoles from "./blue.json";
import GreenRoles from "./green.json";
import RedRoles from "./red.json";
import YellowRoles from "./yellow.json";

export default {
  魏: BlueRoles as Role[],
  蜀: GreenRoles as Role[],
  吳: RedRoles as Role[],
  群: YellowRoles as Role[]
} as CountryRoles;