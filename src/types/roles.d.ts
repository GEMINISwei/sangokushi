interface CountryRoles {
  [index: string]: Role[],
}

interface Role {
  name: string,
  type: string,
  skill: RoleSkill,
  arms: RoleArm[],
  attrs: RoleAttribute[]
}

interface RoleSkill {
  self: string,
  inherited: string,
}

interface RoleArm {
  job: string,
  value: string,
}

interface RoleAttribute {
  attr: string,
  value: number,
  coefficient: number,
}