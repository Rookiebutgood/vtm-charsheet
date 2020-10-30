export function changeTrait(trait) {
  return {
    type: 'CHANGE_ATTR',
    part: trait.part,
    attrType: trait.type,
    name: trait.name,
    value: trait.value
  }
}