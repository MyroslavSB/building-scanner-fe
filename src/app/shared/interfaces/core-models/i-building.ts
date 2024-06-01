import {IUser} from "./i-user";

export interface IBuilding {
  id: number;
  name: string;
  location: ILocation;
  description: string;
  created_by: IUser;
  visited: boolean;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
