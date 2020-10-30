import React, {useState} from 'react';

function Disciplines({disciplineName, disciplineValue}) {
  let [val, setVal] = useState(disciplineValue)
  let points = []
  for(let i = 1; i <= 9; i++) {
    points.push(
    <input type="radio"
    key={i}
    name={disciplineName} 
    defaultChecked={val===i} 
    value={i} 
    onClick={e=>setVal(e.target.value)} />
    )
  }
  return (
    <div>
      <select defaultValue={disciplineName}>
        <option value="animalism">Анимализм</option>
        <option value="auspex">Прорицание</option>
        <option value="celerity">Стремительность</option>
        <option value="chimerstry">Химерия</option>
        <option value="dementation">Помешательство</option>
        <option value="dominate">Доминирование</option> 
        <option value="fortitude">Стойкость</option>
        <option value="necromancy">Некромантия</option>
        <option value="obfuscate">Затемнение</option>
        <option value="obtenebration">Власть над Тенью</option>
        <option value="potence">Могущество</option>
        <option value="presence">Присутствие</option>
        <option value="protean">Превращение</option>
        <option value="quietus">Смертоносность</option>
        <option value="vicissitude">Изменчивость</option>
        <option value="serpentis">Серпетис</option>
        <optgroup label="Некромантия">
          <option value="">Путь Склепа</option>
          <option value="">Путь Кенотафа</option>
          <option value="">Путь Кости</option>
          <option value="">Путь Мортууса</option>
          <option value="">Путь Праха</option>
          <option value="">Стекловидный Путь</option>
        </optgroup>
        <optgroup label="Тауматургия">
          <option>Биотауматургия</option>
          <option>Движение Разума</option>
          <option>Зеленый Путь</option>
          <option>Онейромантия</option>
          <option>Привлечение Огней</option>
          <option>Путь Громовержца</option>
          <option>Путь Домашнего Очага</option>
          <option>Путь Искажения</option>
          <option>Путь Крови</option>
          <option>Путь Мощи Нептуна</option>
          <option>Путь Создания Теней</option>
          <option>Путь Сотворения</option>
          <option>Путь Техномантии</option>
          <option>Путь Управления Духом</option>
          <option>Путь Управления Погодой</option>
          <option>Сосредоточенный Разум</option>
          <option>Управление Смертной Оболочкой</option>
        </optgroup>
      </select>
      {points}
    </div>
  );
}

export default Disciplines;