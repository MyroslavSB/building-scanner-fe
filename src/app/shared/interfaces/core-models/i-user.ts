import {EUserRoles} from "../../../services/user-info/utils/e-user-roles";

export interface IUser {
  id: number;
  username: string;
  email: string;
  role: EUserRoles;
  created_buildings_count: number;
  achievements_count: number;
  visits_count: number;

}
