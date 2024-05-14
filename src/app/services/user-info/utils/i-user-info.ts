import {EUserRoles} from "./e-user-roles";

export interface IUserInfo {
  id: number;
  username: string;
  email: string;
  role: EUserRoles;
  created_buildings_count: number;
  achievements_count: number;
  visits_count: number;

}
