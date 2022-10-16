import { Routes, Route } from 'react-router-dom';
import BusinessContext from './components/features/BusinessContext/BusinessContext';
import TopBar from './components/layout/TopBar/TopBar';
import Home from './components/views/Home/Home';

function App() {
  return (
    <main className='container'>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route
            path='/:taskId/context/:contextId'
            element={<BusinessContext />}
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
