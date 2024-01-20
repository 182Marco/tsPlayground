interface MyUser {
  fullName: string;
  email: string;
  id: number;
}

export const users: MyUser[] = [
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

type IusersAsObj = Record<string, Pick<MyUser, 'email' | 'id'>>;

type IOrganizeInSingleObj = (users: MyUser[]) => IusersAsObj;

export const OrganizeInSingleObj: IOrganizeInSingleObj = users => {
  return users.reduce((acc, cur) => {
    acc[cur.fullName] = {
      email: cur.email,
      id: cur.id,
    };
    return acc;
  }, {} as IusersAsObj);
};
