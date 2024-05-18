export interface IBuilding {
  name: string;
  location: string;
  description: string;
  created_by: string;
  visited: boolean;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}
