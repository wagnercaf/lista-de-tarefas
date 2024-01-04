import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import TodoList from './pages/TodoList'
import Contato from './pages/Contato'
/*
import React from 'react'
import ReactDOM from 'react-dom/client'

//serve para renderizar 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> // faz duas vezes os rederização para pegar erro e mostrar 
    <Home />
  </React.StrictMode>,
)
*/
function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/TodoList" element={<TodoList/>} />
          <Route path="/Contato" element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App