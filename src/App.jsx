import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from './Pages/Home/Home.jsx';

function App() {
  return (   
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/' element={} /> */}
          </Routes>
      </Router>
  );
}

export { App }