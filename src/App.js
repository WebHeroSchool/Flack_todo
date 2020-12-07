import logo from './logo.svg';
import './App.css';

const name = 'Natasha';
const age = 28;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          fontWeight: 700
        }}>
          Hello {name}!
          <p>You are {age} y.o</p>
          <p>You will live {age * 2} more years</p>
        </p>
        <p>
          {name === 'Natasha' && age !== 18 && 'Пить можно'}
        </p>
        <p>
        {age > 18 ? 'Пить можно' : 'Пить нельзя'}
        </p>
        <p>
          {undefined}
          {true}
          {false}
          {null}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
