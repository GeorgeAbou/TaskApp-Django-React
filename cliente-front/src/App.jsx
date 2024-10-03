import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import { TasksPage } from './pages/tasksPage'
import { TaskFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
          <Route path='/' element={<Navigate to="/tasks"/>} /> {/* redirecciona la raiz a task */}
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/task/create" element={<TaskFormPage/>} />
          <Route path="/task/:id" element={<TaskFormPage/>} />
          
    </Routes>
    
    </BrowserRouter>
   

 );
}

export default App;