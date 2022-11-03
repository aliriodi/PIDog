import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/**Herramienta google para medir rendimiento */
import reportWebVitals from './reportWebVitals';
//Codigo Alirio
/**Herramienta para trabajr con rutas de React */
import { BrowserRouter } from 'react-router-dom';
/**Para poder usar el store donde inyecto cambios y renderiza 
 * nuevamente en caso de ser necesario */
import { Provider } from 'react-redux';
/**El store centro de almacenamiento de datos
 * de los reducer y despacha Estados para actuliazr componentes */
import store from './redux/store/';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
         <BrowserRouter>
              <App />
         </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
