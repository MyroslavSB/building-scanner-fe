import {EUserRoles} from "../../../services/user-info/utils/e-user-roles";

export interface IUser {
  id: number;
  role: EUserRoles;
  email: string;
  username: string;
  visit_count: number;
}
