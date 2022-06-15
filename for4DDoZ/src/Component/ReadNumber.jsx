import React from 'react'
import { useState } from 'react'
import spinner from '../assets/spinner.gif'

function readNumber() {

  const [state, setState] = useState({
    line: '?',
    number: '?'
  })
  const [isloading, setIsLoading] = useState({
    line: false,
    number: false
  });
  const { line, number } = state;

  const randomValue = name => name === 'line' ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * 50) + 1;

  const handleClick = e => {
    const name = e.target.name;
    const value = randomValue(name);

    setIsLoading({
      ...isloading,
      [name]: true
    });

    setTimeout(() => {
      setIsLoading({
        ...isloading,
        [name]: false
      });
      setState({
        ...state,
        [name]: value
      })
    }, 3000);
  }

  const buttonStyle = {
    'boxSizing': 'border-box',
    'height': '50px',
    'width': '100px',
    'borderRadius': '25px',
    'margin': '5%',
    'fontSize': '18px',
    'cursor': 'pointer',
    'border': '1px solid pink',
    'backgroundColor': '#fdd',
    'fontFamily': 'NanumSquareRound',
  }

  const wrapperStyle = {
    'fontSize': '20px'
  }

  const inputStyle = {
    'display': 'inline-block',
    'width': '22px',
    'height': '25px',
    'marginLeft': '10px',
    'border': 'none',
    'fontSize': '20px'
  }

  const loaderStyle = {
    'width': '20px',
    'position': 'relative',
    'top': '5px'
  }

  const Loading = () => {
    return <img style={loaderStyle} src={spinner} alt="로딩중" />
  }
  return (
    <div>
      <button style={buttonStyle} name="line" onClick={handleClick}>몇호선?</button>
      <button style={buttonStyle} name="number" onClick={handleClick}>몇번째?</button>
      <div style={wrapperStyle}>
        <a>우리가 갈 곳은!</a>
        <div style={inputStyle}>{isloading.line ? <Loading /> : line}</div>호선
        <div style={inputStyle}>{isloading.number ? <Loading /> : number}</div>번째!!!
      </div>
    </div>
  )
}
export default readNumber