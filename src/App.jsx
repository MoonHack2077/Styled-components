import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from './Pages/Home/Home.jsx';
import { Error } from './Pages/Error/Error.jsx';

function App() {
  return (   
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
          </Routes>
      </Router>
  );
}

export { App }