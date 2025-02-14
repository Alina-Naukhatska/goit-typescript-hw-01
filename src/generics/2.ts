type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType, U extends AllType>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}