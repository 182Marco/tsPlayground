type IVip = {
  name: string;
  traits: string[];
  occupation: string;
};

type IVipNoTrais = Omit<IVip, 'traits'>;
type IAgr = Record<string, IVipNoTrais[]>;
type IGetVipAgr = (p: IVip[]) => IAgr;

export { IAgr, IGetVipAgr, IVip };
