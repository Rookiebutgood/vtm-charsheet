import React from 'react';
import Trait from './Trait'

function Attributes() {
  return (
    <>
      <div style={{width: '33%'}}>
        <h2>Физические</h2>
        <Trait label="Сила" name="strength" type="physical" part="attributes" />
        <Trait label="Ловкость" name="dexterity" type="physical" part="attributes" />
        <Trait label="Выносливость" name="stamina" type="physical" part="attributes" />
      </div>
      <div>
        <h2>Социальные</h2>
        <Trait label="Обаяние" name="charisma" type="social" part="attributes" />
        <Trait label="Манипуляция" name="manipulation" type="social" part="attributes" />
        <Trait label="Внешность" name="appearence" type="social" part="attributes" />
      </div>
      <div>
        <h2>Ментальные</h2>
        <Trait label="Восприятие" name="perception" type="mental" part="attributes" />
        <Trait label="Интеллект" name="intelligence" type="mental" part="attributes" />
        <Trait label="Смекалка" name="wits" type="mental" part="attributes" />
      </div>
    </>
  );
}

export default Attributes;