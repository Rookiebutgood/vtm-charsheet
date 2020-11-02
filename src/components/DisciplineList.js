import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {changeDiscipline, changeDisciplineValue} from '../redux/actions'
import Disciplines from './Disciplines'

function DisciplineList({discipline, changeAttr, changeDisc}) {
  let [disState, setDisState] = useState([])
  
  useEffect(()=>{
    let disciplines = []
    for(let i = 0; i < discipline.length; i++) {
      let disciplineName = discipline[i]['name']
      let disciplineValue = discipline[i]['value']
      disciplines.push(
        <Disciplines disciplineName={disciplineName} 
          disciplineValue={disciplineValue} 
          changeAttr={changeAttr} 
          changeDisc={changeDisc}
          index={i}
          key={i} />
      )
      setDisState(disciplines)
    }
  }, [discipline, changeAttr, changeDisc])

  function addDiscipline() {
    setDisState(()=>[...disState, <Disciplines key={disState.length} />])
  }

  return (
    <>
      {disState}
      <button onClick={()=>addDiscipline()}>Add discipline</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    discipline: state.disciplines
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAttr: (discipline, value) => dispatch(changeDisciplineValue(discipline, value)),
    changeDisc:  (discipline, index) => dispatch(changeDiscipline(discipline, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineList);