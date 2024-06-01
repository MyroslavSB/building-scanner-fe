import {IUser} from "./i-user";
import {IVisit} from "./i-visit";

export interface IAchievement {
  id: number;
  obtained_date: string;
  title: string;
  description: string;
  user: IUser;
  visit?: IVisit;
}
