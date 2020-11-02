import React from 'react';
import Trait from './Trait'

function Virtues() {
  return (
    <>
      <Trait label="Сознательность" name="conscience" part="advantages" type="virtues" maxPoints={5} />
      <Trait label="Самоконтроль" name="self_control" part="advantages" type="virtues" maxPoints={5} />
      <Trait label="Смелость" name="courage" part="advantages" type="virtues" maxPoints={5} />
    </>
    
  );
}

export default Virtues;