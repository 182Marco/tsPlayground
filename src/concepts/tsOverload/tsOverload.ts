type ISumNumOrString = {
  (p: number, p2: number): number;
  (p: string, p2: string): string;
};

const sumWithOverload: ISumNumOrString = (a: any, b: any) => a + b;

export { sumWithOverload };
