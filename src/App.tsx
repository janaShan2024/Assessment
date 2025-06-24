
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Chatpage from './pages/Chatpage';
import DashboardPage from './pages/DashboardPage';
import Chatbot from './pages/Chatpage';
import Layout from './components/Layout';


function App() {
  return (
     <Router>
      <Routes>
       
          <Route index element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="chat" element={<Chatpage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
