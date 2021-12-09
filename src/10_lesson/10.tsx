type AddressType = {
  street: string
  house: number
}

export type UserType = {
  name: string
  hair: number
  address: AddressType
}

type LaptopType = {
  title: string
  model: string
}

export type User2Type = UserType & {
  laptop: LaptopType
}

export type User3Type = {
  name: string
  hair: number
  address: AddressType
  course: Array<string>
}

const user: UserType = {
  name: 'Stanislav',
  hair: 44,
  address: {
    street: 'Tyrgeneva',
    house: 2
  },
}

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

const user3: User3Type = {
  name: 'Oleg',
  hair: 26,
  address: {
    street: 'Lenina',
    house: 2
  },
  course: ['yandex-practicum', 'it-incubator', 'lushenko']
}

export const hairDresser = (user: UserType, power: number) => {
  const copy = {...user, hair: user.hair / power};
  return copy;
}

export const byeNewLaptop = (user: User2Type, {title, model}:LaptopType) => {
  const copy = {...user, laptop: {title, model}}

  return copy;
}

export const editCurses = (user: User3Type, idCourse: number, title: string) => {
  const copy = {...user, course: user.course.map((i, index) => {
    if(index === idCourse) {
      return title;
    } else {
      return i;
    }
    })}

  return copy;
}