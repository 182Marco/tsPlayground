export interface ICelestialBody {
  name: string;
  massSolar: number; // in solar masses
  distanceFromSun: number; // in million kilometers
  diameter: number; // in kilometers
  orbitalPeriod: number; // in days
  surfaceTemperature: number; // in degrees Celsius
}

export type ICelestialBodyNoName = Omit<ICelestialBody, 'name'>;
export type IAgr = Record<string, ICelestialBodyNoName>;
export type IGetAgr = (
  c: ICelestialBody[],
) => Record<string, ICelestialBodyNoName>;

export type IGetBackToCelestialBodies = (
  agr: Record<string, ICelestialBodyNoName>,
) => ICelestialBody[];
