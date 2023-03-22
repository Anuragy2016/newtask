import './App.css';
import Home from './components/Homepage'
import { data } from "./components/Constant"

function App() {
  return (
    <div >
      <Home storeList={data}/>
    </div>
  );
}

export default App;
