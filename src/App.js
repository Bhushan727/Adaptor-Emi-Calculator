
import './App.css';
import Adapter from './components/Adapter';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Adapter />
      </BrowserRouter>
    </div>
  );
}

export default App;
