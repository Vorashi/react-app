import './App.css';
import Hooks from './Hooks';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
          <Router>
      <nav>
        <Link to="/api-data">Show All Posts</Link>
        <Link to="/api-data/1">Show Post 1</Link>
      </nav>
      
      <Routes>
        <Route path="/api-data" element={<Hooks />} />
        <Route path="/api-data/:id" element={<Hooks />} />
      </Routes>
    </Router>
  );
}

export default App;
