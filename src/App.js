import { Routes, Route } from 'react-router-dom';
import TaskPlanner from './components/features/TaskPlanner/TaskPlanner';
import TopBar from './components/layout/TopBar/TopBar';
import Home from './components/views/Home/Home';

function App() {
  return (
    <main className='container'>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/:taskId' element={<TaskPlanner />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
