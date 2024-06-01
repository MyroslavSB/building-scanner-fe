import {IUser} from "../../../shared/interfaces/core-models/i-user";
import {EUserRoles} from "./e-user-roles";

export const DefaultUserInfo: IUser = {
  id: null,
  username: null,
  email: null,
  role: EUserRoles.USER,
  created_buildings_count: null,
  achievements_count: null,
  visits_count: null
}
