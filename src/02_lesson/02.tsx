// lesson about objects
export type FriendType = {
  age: number
  isMarried: boolean
}

type FriendsType = {
  ['Artur']: FriendType
  ['Anton']: FriendType
}

type AddressType = {
  city: string
  street: string
}

export type StudentType = {
  name: string
  age: number
  isActive: boolean
  address: AddressType
  books: Array<string>
  friends: FriendsType
}

export const student: StudentType = {
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

console.log(student.friends['Artur'].isMarried);
console.log(student.books[2]);

