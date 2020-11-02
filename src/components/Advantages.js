import React from 'react';
import {connect} from 'react-redux'
import BackgroundList from './BackgroundList'
import DisciplineList from './DisciplineList'
import Virtues from './Virtues'

function Advantages() {

  return (
    <>
      <div style={{width: '33%'}}>
        <h2>Дополнения</h2>
        <BackgroundList />
      </div>
      <div>
        <h2>Дисциплины</h2>
        <DisciplineList />
      </div>
      <div>
        <h2>Добродетели</h2>
        <Virtues />
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