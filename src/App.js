
import './App.css';
import UseState from './components/UseState';
import UseStateCounterTwo from './components/UseStateCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import YouHaveClicked from './components/YouHaveClicked';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseState />
        <UseStateCounterTwo />
        <HookCounterThree />
        <YouHaveClicked/>
      </header>
    </div>
  );
}

export default App;
