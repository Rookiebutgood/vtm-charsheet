import React, {useState} from 'react';
import {connect} from 'react-redux'

function Background({backgroundName, backgroundValue}) {
  let [val, setVal] = useState(backgroundValue)
  let points = []
  for(let i = 1; i <= 9; i++) {
    points.push(
    <input type="radio"
    key={i}
    name={backgroundName} 
    defaultChecked={val===i} 
    value={i} 
    onClick={e=>setVal(e.target.value)} />
    )
  }
  return (
    <div>
    <select defaultValue={backgroundName} onChange={e=>console.log(e.target.value)}>
      <option value="allies">Союзники</option>
      <option value="contacts">Связи</option>
      <option value="fame">Слава</option>
      <option value="herd">Стадо</option>
      <option value="influence">Влияние</option>
      <option value="mentor">Ментор</option>
      <option value="resources">Ресурсы</option>
      <option value="retainers">Слуги</option>
      <option value="status">Статус</option>
    </select>
    {points} 
     </div>
  );
}

const mapStateToProps = state => {
 
  return {

  }
}

export default connect(mapStateToProps, null)(Background);