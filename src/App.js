import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
