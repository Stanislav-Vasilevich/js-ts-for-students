import {getName, sum} from "./01";

test('the amount must be correct', () => {
  // data
  const a = 10;
  const b = 5;

  // action
  const sumAction = sum(a, b);

  // expect result
  expect(sumAction).toBe(15);
})

test('get a username', () => {
  // data
  const name = ' +Аркадий Яковлевич..   '

  // action
  const result = getName(name);

  // expect result
  expect(result).toBe('Аркадий Яковлевич');
})