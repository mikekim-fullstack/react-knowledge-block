import logo from './logo.svg';
import './App.css';

import CallTimer from './knowledgeBlock/hooks/imperativeHook/CallTimer';
import SerialCommunication from './components/SerialCommunication'

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* useImperativeHandle */}
      <CallTimer />
      <SerialCommunication />
    </div>
  );
}

export default App;
