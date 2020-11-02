export function changeTrait(trait) {
  return {
    type: 'CHANGE_ATTR',
    part: trait.part,
    attrType: trait.type,
    name: trait.name,
    value: trait.value
  }
}

export function changeDiscipline(discipline, index) {
  return {
    type: 'CHANGE_DISCIPLINE',
    name: discipline,
    index: index
  }
}

export function changeDisciplineValue(discipline, value) {
  return {
    type: 'CHANGE_DISCIPLINE_VALUE',
    name: discipline,
    value: value
  }
}

export function changeClanDiscipline(clanName) {
  let clanDisciplines = [];
  switch(clanName) {
    case 'brujah':
      clanDisciplines = [
        {name: 'potence', value: 0},
        {name: 'presence', value: 0},
        {name: 'celerity', value: 0}
      ]
    break;
    case 'gangrel':
      clanDisciplines = [
        {name: 'animalism', value: 0},
        {name: 'fortitude', value: 0},
        {name: 'protean', value: 0}
      ]
    break;
    case 'malkavian':
      clanDisciplines = [
        {name: 'auspex', value: 0},
        {name: 'dementation', value: 0},
        {name:'obfuscate', value: 0}
      ]
    break;
    case 'nosferatu':
      clanDisciplines = [
        {name: 'animalism', value: 0},
        {name: 'obfuscate', value: 0},
        {name:'potence', value: 0}
      ]
    break;
    case 'toreador':
      clanDisciplines = [
        {name: 'auspex', value: 0},
        {name: 'celerity', value: 0},
        {name:'presence', value: 0}
      ]
    break;
    case 'tremere':
      clanDisciplines = [
        {name: 'auspex', value: 0},
        {name: 'dominate', value: 0},
        {name:'thaumaturgy-blood', value: 0}
      ]
    break;
    case 'ventrue':
      clanDisciplines = [
        {name: 'dominate', value: 0},
        {name: 'fortitude', value: 0},
        {name:'presence', value: 0}
      ]
    break;
    default:
      clanDisciplines = [];
      break;
  }
  return {
    type: 'CHANGE_CLAN_DISCIPLINE',
    disciplines: clanDisciplines,
  }
}