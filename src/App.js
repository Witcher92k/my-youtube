import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from './MainContainer';
import WatchCompoent from './Watch';

function App() {


  const appRouter = createBrowserRouter([

    {
      path:"/",
      element:<Body/>,
      children:[

        {
          path:"/",
          element:<MainContainer/>
        },

        {
          path:"/watch",
          element:<WatchCompoent></WatchCompoent>
        }

      ]
    },
  
    
  ])
  
  return (
    <Provider store={appStore}>
    <div className="text-red-500">
    <Header></Header>
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
