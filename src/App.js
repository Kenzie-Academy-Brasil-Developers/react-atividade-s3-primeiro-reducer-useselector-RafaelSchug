import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import FruitsPage from './components/FruitsPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FruitsPage></FruitsPage>
      </div>
    </Provider>
  );
}

export default App;
