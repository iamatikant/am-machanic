import logo from './logo.svg';
import './App.css';
import {Flex} from '@pega/cosmos-react-core'

function App() {
  return (
    <Flex>
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </Flex>
  );
}

export default App;
