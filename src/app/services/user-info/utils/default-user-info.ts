import {IUserInfo} from "./i-user-info";
import {EUserRoles} from "./e-user-roles";

export const DefaultUserInfo: IUserInfo = {
  id: null,
  username: null,
  email: null,
  role: EUserRoles.USER,
  created_buildings_count: null,
  achievements_count: null,
  visits_count: null
}
