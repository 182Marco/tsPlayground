export interface IUser {
  fullName: string;
  email: string;
  id: number;
}

export const users: IUser[] = [
  {
    fullName: 'Alice',
    email: 'alice@gmail.com',
    id: 1,
  },
  {
    fullName: 'Bob',
    email: 'bob@gmail.com',
    id: 2,
  },
  {
    fullName: 'Charlie',
    email: 'charlie@gmail.com',
    id: 3,
  },
];

type IOrganizeInSingleObj = (
  users: IUser[],
) => Record<string, Pick<IUser, 'email' | 'id'>>;

export const getAggregateUsers: IOrganizeInSingleObj = users =>
  users.reduce(
    (a, v) => ({
      ...a,
      [v.fullName]: {
        email: v.email,
        id: v.id,
      },
    }),
    {},
  );
