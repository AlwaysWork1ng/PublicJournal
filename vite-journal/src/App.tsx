import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JournalPage from './pages/JournalPage';
import SwordPage from './pages/SwordPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Journal" element={<JournalPage />} /> testing pages seperately
          <Route path="/SWORD" element={<SwordPage />} />
          {/*<Route path="/ConnectionPage" element={<ConnectionPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;