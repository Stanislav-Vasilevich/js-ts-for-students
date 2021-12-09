import {byeNewLaptop, editCurses, hairDresser, User2Type, User3Type, UserType} from "./10";

test('trim user', () => {
  // data
  const user: UserType = {
    name: 'Stanislav',
    hair: 44,
    address: {
      street: 'Tyrgeneva',
      house: 2
    },
  }

  // action
  const action: UserType = hairDresser(user, 2);

  // expect
  expect(action.hair).toBe(22);
  expect(user.hair).toBe(44);
});

test('bye new laptop', () => {
  // data
  const user2: User2Type = {
    name: 'Oleg',
    hair: 26,
    address: {
      street: 'Lenina',
      house: 2
    },
    laptop: {
      title: 'macbook',
      model: 'm1'
    }
  }

  // action
  const newComp: User2Type = byeNewLaptop(user2, {title: 'imac', model: 'intel'});

  // expect
  expect(user2.address).toStrictEqual({street: 'Lenina', house: 2});
  expect(user2.laptop).toStrictEqual({title: 'macbook', model: 'm1'});
  expect(newComp.name).toBe(user2.name);
  expect(newComp.hair).toBe(user2.hair);
  expect(newComp.address).toBe(user2.address);
  expect(newComp.address).toStrictEqual({street: 'Lenina', house: 2});
  expect(newComp.laptop).toStrictEqual({title: 'imac', model: 'intel'});
});

test('edit title course', () => {
  // data
  const user3: User3Type = {
    name: 'Oleg',
    hair: 26,
    address: {
      street: 'Lenina',
      house: 2
    },
    course: ['yandex-practicum', 'it-incubator', 'lushenko']
  }

  // action
  const newCourse = editCurses(user3, 0, 'Ismail Yseinov');

  // expect
  expect(user3.course).toStrictEqual(['yandex-practicum', 'it-incubator', 'lushenko']);
  expect(newCourse.course).toStrictEqual(['Ismail Yseinov', 'it-incubator', 'lushenko']);
  expect(user3.course).toBe(['Ismail Yseinov', 'it-incubator', 'lushenko']);
})