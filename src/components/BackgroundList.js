import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Background from './Background'

function BackgroundList({background}) {
  let [backState, setBackState] = useState([])
  useEffect(()=>{
    let backgrounds = []
    for(let i = 0; i < background.length; i++) {
      let backgroundName = background[i]['name']
      let backgroundValue = background[i]['value']
      backgrounds.push(<Background backgroundName={backgroundName} backgroundValue={backgroundValue} key={i} />)
    }
    setBackState((prev)=>[...prev, backgrounds])
  }, [background])

  function addBackground() {
    setBackState(()=>[...backState, <Background key={backState.length} />])
  }

  return (
    <>
      {backState}
      <button onClick={()=>addBackground()}>Add back</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    background: state.background
  }
}

export default connect(mapStateToProps, null)(BackgroundList);