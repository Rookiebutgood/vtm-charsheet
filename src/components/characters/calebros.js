const calebros = {
  player: 'StoryTeller',
  name: 'Calebros',
  clan: 'Nosferatu',
  nature: 'Martyr',
  mask: 'Director',
  generation: 9,
  attributes: {
    physical: {
      strength: 3,
      dexterity: 3,
      stamina: 3
    },
    social: {
      charisma: 2,
      manipulation: 5,
      appearence: 0
    },
    mental: {
      perception: 5,
      intelligence: 5,
      wits: 4
    }
  },
  abilities: {
    talents: {   
      alertness: 4, //бдительность
      athletics: 0,
      dodge: 0,
      brawl: 4,
      emphaty: 0,
      expression: 0,
      intimidation: 3, //запугивание
      leadership: 3,
      streetwise: 5,
      subterfuge: 4 //хитрость
    },
    skills: {
      animal_ken: 3,
      crafts: 1,
      drive: 2,
      etiquette: 0,
      firearms: 0,
      melee: 1,
      performance: 2,
      security: 2,
      stealth: 4,
      survival: 3
    },
    knowledges: {
      academics: 4,
      computer: 1,
      finance: 3,
      investigation: 5,
      laws: 0,
      linguistics: 3,
      medicine: 0,
      occult: 3,
      politics: 4,
      science: 2,
    }
  },
  additional_traits: {
    camarilla_lore: 2, 
    sabbat_lore: 1, 
    sewer_lore: 3,
    clan_prestige_nosferatu: 2
  },
  advantages: {
    background: [
      {name: 'contacts', value: 5},
      {name: 'herd', value: 3},
      {name: 'influence', value: 3},
      {name: 'mentor', value: 5},
      {name: 'resources', value: 4},
      {name: 'status', value: 4},
    ],
    disciplines : [
      {name: 'animalism', value: 3},
      {name: 'auspex', value: 1},
      {name:'celerity', value: 1},
      {name:'fortitude', value: 2},
      {name:'obfuscate', value: 5},
      {name:'potence', value: 3},
      {name: 'protean', value: 2}
    ],
    virtues: {
      conscience: 2, //Сознательность
      self_control: 3, //Самоконтроль
      courage: 2 //Храбрость
    }
  },
  status: {
    morallity: {
      path: 'humanity',
      value: 5
    },
    willlpower: 7
  }
}

export default calebros