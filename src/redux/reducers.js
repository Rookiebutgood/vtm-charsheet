import {combineReducers} from 'redux'
import calebros from '../components/characters/calebros'

const initCharactrer = calebros
const initialAttributes = JSON.parse(window.localStorage.getItem('attr')) || {
  physical: {
    strength: 9,
    dexterity: 0,
    stamina: 0
  },
  social: {
    charisma: 0,
    manipulation: 0,
    appearence: 0
  },
  mental: {
    perception: 0,
    intelligence: 0,
    wits: 0
  }
}

const initialAbilities = {
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
}

const initialBackground = [
  {name: 'contacts', value: 5},
  {name: 'herd', value: 3},
  {name: 'influence', value: 3},
  {name: 'mentor', value: 5},
  {name: 'resources', value: 4},
  {name: 'status', value: 4},
]


function attributes(state=initCharactrer.attributes, action) {
  switch (action.type) {
    case 'CHANGE_ATTR':
      const newState = {...state, [action.attrType]:{...state[action.attrType], [action.name]: [action.value]}}
      return newState
    default:
      return state
  }
}

function abilities(state = initCharactrer.abilities, action) {
  switch (action.type) {
    case 'CHANGE_ATTR':
      return {...state, [action.attrType]:{...state[action.attrType], [action.name]: [action.value]}}
    default:
      return state
  }
}

function background(state = initCharactrer.advantages.background, action) {
  switch (action.type) {
    case 'CHANGE_ATTR':
      return {...state, [action.attrType]:{...state[action.attrType], [action.name]: [action.value]}}
    default:
      return state
  }
}

function disciplines(state = initCharactrer.advantages.disciplines, action) {
  switch (action.type) {
    case 'CHANGE_ATTR':
      return {...state, [action.attrType]:{...state[action.attrType], [action.name]: [action.value]}}
    default:
      return state
  }
}



export default combineReducers({attributes, abilities, background, disciplines})
