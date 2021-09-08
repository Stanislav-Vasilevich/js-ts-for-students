import {student, StudentType} from "../02_lesson/02";

export const addBook = (stydent: StudentType, book: string) => {
  stydent.books.push(book);
}
