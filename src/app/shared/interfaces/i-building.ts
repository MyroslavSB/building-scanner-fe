export interface IBuilding {
  id: number;
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
