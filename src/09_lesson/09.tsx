const user = {
  name: 'Lena',
  age: 33
}

export type UserType = {
  name: string
  age: number
}

export const countAge = (user: UserType) => {
  user.age++;
}