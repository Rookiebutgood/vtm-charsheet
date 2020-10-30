import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import Background from './Background'
import Disciplines from './Disciplines'

function Advantages({advantages, background, discipline}) {
  let [disciplineCount, setDisciplineCount] = useState(Object.keys(advantages.disciplines).length || 3)
  let disciplines = []
  let [backState, setBackState] = useState([])
  let [disState, setDisState] = useState([])
  for(let i = 0; i < disciplineCount; i++) {
    if(advantages.disciplines) {
      let disciplineName = Object.keys(advantages.disciplines)[i]
      let disciplineValue = advantages.disciplines[disciplineName]
      disciplines.push(<Disciplines disciplineName={disciplineName} disciplineValue={disciplineValue} key={i} />)
    } else {
      disciplines.push(<Disciplines key={i} />)
    }
  }

  useEffect(()=>{
    let backgrounds = []
    for(let i = 0; i < background.length; i++) {
      let backgroundName = background[i]['name']
      let backgroundValue = background[i]['value']
      backgrounds.push(<Background backgroundName={backgroundName} backgroundValue={backgroundValue} key={i} />)
    }
    setBackState((prev)=>[...prev, backgrounds])
  }, [background])

  useEffect(()=>{
    let disciplines = []
    for(let i = 0; i < discipline.length; i++) {
      let disciplineName = discipline[i]['name']
      let disciplineValue = discipline[i]['value']
      disciplines.push(<Disciplines disciplineName={disciplineName} disciplineValue={disciplineValue} key={i} />)
    }
    setDisState((prev)=>[...prev, disciplines])
  }, [discipline])

  function addBackground() {
    setBackState(()=>[...backState, <Background key={backState.length} />])
  }

  function addDiscipline() {
    setDisState(()=>[...disState, <Disciplines key={disState.length} />])
  }

  return (
    <>
      <div>
        <h2>Дополнения</h2>
        {backState}
        <button onClick={()=>addBackground()}>Add back</button>
      </div>
      <div>
        <h2>Дисциплины</h2>
        {disState}
        <button onClick={()=>addDiscipline()}>Add discipline</button>
      </div>
      <div>
        <h2>Добродетели</h2>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    background: state.background,
    discipline: state.disciplines
  }
}

export default connect(mapStateToProps, null)(Advantages);