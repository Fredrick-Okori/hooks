
import './App.css';
import UseState from './components/UseState';
import UseStateCounterTwo from './components/UseStateCounterTwo';
import HookCounterThree from './components/HookCounterThree';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseStateCounterTwo />
        <HookCounterThree />
      </header>
    </div>
  );
}

export default App;
