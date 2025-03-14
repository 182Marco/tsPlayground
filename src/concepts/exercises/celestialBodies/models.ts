interface ICelestialBody {
  name: string;
  massSolar: number; // in solar masses
  distanceFromSun: number; // in million kilometers
  diameter: number; // in kilometers
  orbitalPeriod: number; // in days
  surfaceTemperature: number; // in degrees Celsius
}

type ICelestialBodyNoName = Omit<ICelestialBody, 'name'>;
type IAgr = Record<string, ICelestialBodyNoName>;
type IGetAgr = (c: ICelestialBody[]) => Record<string, ICelestialBodyNoName>;

type IGetBackToCelestialBodies = (
  agr: Record<string, ICelestialBodyNoName>,
) => ICelestialBody[];

export {
  ICelestialBody,
  ICelestialBodyNoName,
  IAgr,
  IGetAgr,
  IGetBackToCelestialBodies,
};
