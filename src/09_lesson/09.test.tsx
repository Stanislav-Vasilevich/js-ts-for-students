import {countAge, UserType} from "./09";

test('add user one year', () => {
  const user:UserType = {
    name: 'Lena',
    age: 33
  }

  countAge(user);

  expect(user.age).toBe(34);
})