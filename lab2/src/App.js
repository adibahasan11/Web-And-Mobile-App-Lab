import logo from './logo.svg';
import './App.css';
import { TimerProvider } from './Components/TimerContext';
import AddTimer from './Components/AddTimer';
import TimerList from './Components/TimerList';

function App() {
  return (
    <TimerProvider>
    <div className="App">
      <header className="App-header">
        <AddTimer />
        <TimerList />
      </header>
    </div>
    </TimerProvider>
  );
}

export default App;
