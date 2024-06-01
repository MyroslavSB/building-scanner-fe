import {IBuilding} from "./i-building";
import {IUser} from "./i-user";
import {IAchievement} from "./i-achievement";

export interface IVisit {
  id: number;
  visit_date: string;
  user: IUser
  building: IBuilding;
  achievement: IAchievement;
}
