import './App.css';
import RefInput from './Components/RefInput';
import EventInput from './Components/EventInput';
import RefClassSample from './Components/refClassSample';
import EventInputClass from './Components/EventInputClass';

function App() {
  return (
    <div className="App">
      <RefInput />
      <RefClassSample/>
      <EventInput/>
      <EventInputClass/>
    </div>
  );
}

export default App;
