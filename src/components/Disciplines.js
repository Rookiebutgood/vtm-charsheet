import React, {useEffect, useState} from 'react';
import hex from '../assets/hexagon.svg'

function Disciplines({disciplineName, disciplineValue, changeAttr, changeDisc, index}) {
  let [name, setName] = useState(disciplineName)
  let [points, setPoints] = useState([])
  useEffect(() => { //при смене клана должны менятся названия дисциплин и их значения
    setName(disciplineName)
    let p =[]
    for(let i = 1; i <= 9; i++) {
      p.push(
      <input type="radio"
      key={i}
      name={disciplineName}
      checked={parseInt(disciplineValue) === i}
      value={i}
      onChange={e=>changeAttr(disciplineName, e.target.value)} />
      )
    }
    setPoints(p)
  }, [disciplineName, disciplineValue, changeAttr])

  return (
    <div>
      <select value={name} onChange={e=>changeDisc(e.target.value, index)}>
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
          <option value="necromancy-sepulchre">Путь Склепа</option>
          <option value="necromancy-cenotaph">Путь Кенотафа</option>
          <option value="necromancy-bone">Путь Кости</option>
          <option value="necromancy-mortuus">Путь Мортууса</option>
          <option value="necromancy-ash">Путь Праха</option>
          <option value="necromancy-vitreous">Стекловидный Путь</option>
        </optgroup>
        <optgroup label="Тауматургия">
          <option value="thaumaturgy-bio">Биотауматургия</option>
          <option value="thaumaturgy-mindmove">Движение Разума</option>
          <option value="thaumaturgy-green">Зеленый Путь</option>
          <option value="thaumaturgy-oneiro">Онейромантия</option>
          <option value="thaumaturgy-fire">Привлечение Огней</option>
          <option value="thaumaturgy-lightning">Путь Громовержца</option>
          <option value="thaumaturgy-home">Путь Домашнего Очага</option>
          <option value="thaumaturgy-corrupt">Путь Искажения</option>
          <option value="thaumaturgy-blood">Путь Крови</option>
          <option value="thaumaturgy-water">Путь Мощи Нептуна</option>
          <option value="thaumaturgy-shadow">Путь Создания Теней</option>
          <option value="thaumaturgy-create">Путь Сотворения</option>
          <option value="thaumaturgy-tehno">Путь Техномантии</option>
          <option value="thaumaturgy-spirit">Путь Управления Духом</option>
          <option value="thaumaturgy-weather">Путь Управления Погодой</option>
          <option value="thaumaturgy-focusmind">Сосредоточенный Разум</option>
          <option value="thaumaturgy-mortalshell">Управление Смертной Оболочкой</option>
        </optgroup>
      </select>
      <div style={{background: `url(${hex}) no-repeat`, backgroundSize: 'contain', width:'20px', textAlign:'center', display: 'inline-block'}}>
      {disciplineValue}
      </div>
      {points}
    </div>
  );
}

export default Disciplines;