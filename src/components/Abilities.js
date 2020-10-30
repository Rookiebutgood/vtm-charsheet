import React from 'react';
import Trait from './Trait'

function Abilities() {
  return (
    <>
      <div>
        <h2>Таланты</h2>
        <Trait label="Атлетика" name="athletics" type="talents" part="abilities" />
        <Trait label="Внимательность" name="alertness" type="talents" part="abilities" />
        <Trait label="Запугивание" name="intimidation" type="talents" part="abilities" />
        <Trait label="Знание улиц" name="streetwise" type="talents" part="abilities" />
        <Trait label="Лидерство" name="leadership" type="talents" part="abilities" />
        <Trait label="Рукопашный бой" name="brawl" type="talents" part="abilities" />
        <Trait label="Уклонение" name="dodge" type="talents" part="abilities" />
        <Trait label="Хитрость" name="subterfuge" type="talents" part="abilities" />
        <Trait label="Экспрессия" name="expression" type="talents" part="abilities" />
        <Trait label="Эмпатия" name="emphaty" type="talents" part="abilities" />
      </div>
      <div>
        <h2>Навыки</h2>
        <Trait label="Безопасность" name="security" type="skills" part="abilities" />
        <Trait label="Вождение" name="drive" type="skills" part="abilities" />
        <Trait label="Выживание" name="survival" type="skills" part="abilities" />
        <Trait label="Исполнение" name="performance" type="skills" part="abilities" />
        <Trait label="Знание животных" name="animal_ken" type="skills" part="abilities" />
        <Trait label="Ремесла" name="crafts" type="skills" part="abilities" />
        <Trait label="Скрытность" name="stealth" type="skills" part="abilities" />
        <Trait label="Стрельба" name="firearms" type="skills" part="abilities" />
        <Trait label="Фехтование" name="melee" type="skills" part="abilities" />
        <Trait label="Этикет" name="etiquette" type="skills" part="abilities" />
      </div>
      <div>
        <h2>Познания</h2>
        <Trait label="Академические" name="academics" type="knowledges" part="abilities" />
        <Trait label="Законы" name="laws" type="knowledges" part="abilities" />
        <Trait label="Компьютеры" name="computer" type="knowledges" part="abilities" />
        <Trait label="Лингвистика" name="linguistics" type="knowledges" part="abilities" />
        <Trait label="Медицина" name="medicine" type="knowledges" part="abilities" />
        <Trait label="Научные" name="science" type="knowledges" part="abilities" />
        <Trait label="Оккультизм" name="occult" type="knowledges" part="abilities" />
        <Trait label="Политика" name="politics" type="knowledges" part="abilities" />
        <Trait label="Расследования" name="investigation" type="knowledges" part="abilities" />
        <Trait label="Финансы" name="finance" type="knowledges" part="abilities" />
      </div>
    </>
  );
}

export default Abilities;