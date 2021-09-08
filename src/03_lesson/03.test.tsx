import {StudentType} from "../02_lesson/02";
import {addBook} from "./03";

// создаем студента
let student: StudentType;

// задаем данные студента по умолчанию
beforeEach(() => {
  student = {
    name: 'Stanislav',
    age: 33,
    isActive: false,
    address: {
      city: 'Krasnodar',
      street: 'Tipanova',
    },
    books: ['reality transurfing', 'js for kids', 'rich dad poor dad'],
    friends: {
      ['Artur']: {
        age: 36,
        isMarried: true
      },
      ['Anton']: {
        age: 34,
        isMarried: false
      }
    }
  };
})

// пишем тест
test('added book in object student', () => {
  // вызываем функцию
  addBook(student, 'Harry Potter');
  // проверяем тест
  expect(student.books.length).toBe(4);
  expect(student.books[3]).toBe('Harry Potter');
  expect(student.books[3]).toBeDefined();
})
