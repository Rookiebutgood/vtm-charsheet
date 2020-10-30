const newCharacter = {
  player: 'StoryTeller',
  name: 'new',
  clan: 'Nosferatu',
  nature: 'Martyr',
  mask: 'Director',
  generation: 9,
  attributes: {
    physical: {
      strength: 0,
      dexterity: 0,
      stamina: 0
    },
    social: {
      charisma: 0,
      manipulation: 0,
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
      alertness: 0, //бдительность
      athletics: 0,
      dodge: 0,
      brawl: 0,
      emphaty: 0,
      expression: 0,
      intimidation: 0, //запугивание
      leadership: 0,
      streetwise: 0,
      subterfuge: 0 //хитрость
    },
    skills: {
      animal_ken: 0,
      crafts: 0,
      drive: 0,
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
      linguistics: 0,
      medicine: 0,
      occult: 3,
      politics: 4,
      science: 2,
    }
  },
  additional_traits: {},
  advantages: {
    background: {},
    disciplines : {},
    virtues: {
      conscience: 0, //Сознательность
      self_control: 0, //Самоконтроль
      courage: 0 //Храбрость
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

export default newCharacter