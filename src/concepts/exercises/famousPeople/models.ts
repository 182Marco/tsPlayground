export type IVip = {
  name: string;
  traits: string[];
  occupation: string;
};

type IVipNoTrais = Omit<IVip, 'traits'>;
export type IAgr = Record<string, IVipNoTrais[]>;
export type IGetVipAgr = (p: IVip[]) => IAgr;
