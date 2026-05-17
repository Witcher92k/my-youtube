import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <div className="text-red-500">
    <Header></Header>
    <Body></Body>
    </div>
    </Provider>
  );
}

export default App;
