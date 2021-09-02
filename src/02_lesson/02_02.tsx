export type StreetType = {
  title: "White street" | "Happy street" | "Central Str" | "South Str"
}

export type AddressType = {
  number: number
  street: StreetType
}

export type HousesType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
}

export type AddressGovernmentBuildingsType = {
  street: StreetType
}

export type GovernmentBuildingsType = {
  type: "HOSPITAL" | "FIRE-STATION"
  budget: number
  staffCount: number
  address: AddressGovernmentBuildingsType
}
