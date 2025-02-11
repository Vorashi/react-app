import './App.css';
import Hooks from './Hooks';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <nav>
      <Link to="/weather/Moscow">Погода в Москве</Link>
      <Link to="/weather/Saint Petersburg">Погода в Питере</Link>
    </nav>

    <Routes>
      <Route path="/weather/:city" element={<Hooks />} />
      <Route path="/weather" element={<Hooks />} />
    </Routes>
  </Router>
  );
}

export default App;
