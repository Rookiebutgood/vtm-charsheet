import React from 'react';
import {connect} from 'react-redux'
import {changeTrait} from '../redux/actions'

function Trait({label, name, maxPoints, attrValue, changeTrait}) {
  let points = []
  let max = maxPoints || 9;
  for(let i = 1; i <= max; i++) {
    points.push(
      <input type="radio"
      key={i}
      name={name} 
      defaultChecked={parseInt(attrValue)===i} 
      value={i} 
      onClick={e=>changeTrait(e.target.value)} />
    )
  }
  return (
    <div>
      <label style={{width: '200px', display: 'inline-block'}}>{label}</label>
      {attrValue}
      {points}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    attrValue: state[ownProps.part][ownProps.type][ownProps.name]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let {part, name, type} = ownProps
  return {
    changeTrait: (value) => dispatch(changeTrait({part, name, type, value}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trait);
