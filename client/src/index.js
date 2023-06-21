import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import ScheduleStore from './store/ScheduleStore'
import UserStore from './store/UserStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
    <Context.Provider value={{
    userStore: new UserStore() ,
    scheduleStore: new ScheduleStore(),
  }}>
      <App/>
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
  
);

