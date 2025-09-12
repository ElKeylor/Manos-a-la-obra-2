import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>

      {/*Lista De Tareas*/}
      <h1>LISTA DE TAREAS DE AXEL</h1>

      {/* Input y botón */}
      <div className="task-barra">
        <input type="text" placeholder="Escribe una nueva tarea..." />
        <button>ADD</button>
      </div>

      {/* Lista de tareas */}
      <ul className="task-list">
        <li>
          <label>
          <input type="checkbox" />
          <span>Task N</span>
          </label>
          <button className ="delete-btn">🗑️</button>
        </li>
        <li>
          <label>
          <input type="checkbox" />
          <span>Task N-1</span>
          </label>
          <button className="delete-btn">🗑️</button>
        </li>
        <li>
          <label>
          <input type="checkbox" defaultChecked />
          <span className="completed">Completed Task N-2</span>
          </label>
          <button className="delete-btn">🗑️</button>
        </li>
        <li>
          <label>
          <input type="checkbox" />
          <span>Task K</span>
          </label>
          <button className="delete-btn">🗑️</button>
        </li>
        <li>
          <label>
          <input type="checkbox" />
          <span>Task 2</span>
          </label>
          <button className="delete-btn">🗑️</button>
        </li>
        <li>
          <label>
          <input type="checkbox" defaultChecked />
          <span className="completed">Completed Task 1</span>
          </label>
          <button className="delete-btn">🗑️</button>
        </li>
      </ul>
      </div>
    </>
  )
}

export default App
