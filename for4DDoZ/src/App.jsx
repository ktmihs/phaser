import Header from './Container/Header'
import Main from './Container/Main'
import ReadNumber from './Component/ReadNumber'

function App() {
  const globalStyle = {
    'textAlign': 'center',
    'fontSize': '24px',
    'fontFamily': 'NanumSquareRound',
    'color': '#333',
  }

  const componentStyle = {
    'margin': '50vh 25% 0 25%',
    'transform': 'translateY(-50%)',
    'padding': '5%',
    'border': '1px solid red'
  }

  return (
    <div style={globalStyle}>
      <div style={componentStyle}>
        <Header />
        <Main>
          <ReadNumber />
        </Main>
      </div>
    </div>
  )
}

export default App
