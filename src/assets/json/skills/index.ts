import BlueSkills from "./blue.json";
import GreenSkills from "./green.json";
import RedSkills from "./red.json";
import YellowSkills from "./yellow.json";

const allSkills: Skill[] = BlueSkills.concat(GreenSkills, RedSkills, YellowSkills);

export default allSkills;
