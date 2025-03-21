type IUser = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const pickExerciseUsers: IUser[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 35 },
];

interface IUserVerbose {
  personalInfo: Pick<IUser, 'name' | 'email'>;
  basicInfo: Pick<IUser, 'id' | 'age'>;
}

type IGroupProperties = (userAr: IUser[]) => IUserVerbose[];

/* 
2. Objective:
Write a function groupProperties that takes
an array of objects and returns a new array
where the properties are grouped into separate objects:
personalInfo: will contain name and email.
basicInfo: will contain id and age.
*/

const groupPropertiesUsingPick: IGroupProperties = userAr =>
  userAr.map(u => ({
    personalInfo: { name: u.name, email: u.email },
    basicInfo: { id: u.id, age: u.age },
  }));

export { groupPropertiesUsingPick, pickExerciseUsers };
