import React from 'react';
import Name from './Name'
import Attributes from './Attributes'
import Abilities from './Abilities'
import Advantages from './Advantages'
import calebros from './characters/calebros'

function FirstBlank() {
  return (
    <div className="first-blank">
      <div className="character__name" style={{display: 'flex'}}>
        <Name />
      </div>
      <div className="character__attributes" style={{display: 'flex'}}>
        <Attributes />
      </div>
      <div className="character__abilities" style={{display: 'flex'}}>
        <Abilities abilities={calebros.abilities}/>
      </div>
      <div className="character__advantages" style={{display: 'flex'}}>
        <Advantages advantages={calebros.advantages} />
      </div>
      <div className="character__status"></div>
    </div>
  );
}

export default FirstBlank;
