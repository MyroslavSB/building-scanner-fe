import {IBuilding} from "./i-building";
import {IUser} from "./i-user";

export class IMessage {
  id: number;
  text: string;
  user: IUser;
  building: IBuilding;
  created_at: string;
}
