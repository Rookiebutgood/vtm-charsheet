import React from 'react';
import {connect} from 'react-redux';
import {changeClanDiscipline} from '../redux/actions';

function Clan({changeClan}) {
  return (
    <select onChange={e=>changeClan(e.target.value)}>
      <option value="brujah">Бруха</option>
      <option value="gangrel">Гангрел</option>
      <option value="malkavian">Малкавиан</option>
      <option value="nosferatu">Носферату</option>
      <option value="toreador">Тореодор</option>
      <option value="tremere">Тремер</option>
      <option value="ventrue">Вентру</option>
      <option value="lasombra">Ласомбра</option>
      <option value="tzimisce">Цимисх</option>
      <option value="assamite">Ассамит</option>
      <option value="settite">Последователи Сета</option>
      <option value="giovanni">Джованни</option>
      <option value="ravnos">Равнос</option>
    </select>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    changeClan: (value) => dispatch(changeClanDiscipline(value))
  }
}

export default connect(null, mapDispatchToProps)(Clan);