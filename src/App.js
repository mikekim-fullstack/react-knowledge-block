import logo from './logo.svg';
import './App.css';

import CallTimer from './knowledgeBlock/hooks/imperativeHook/CallTimer';
function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* useImperativeHandle */}
      <CallTimer />
    </div>
  );
}

export default App;
