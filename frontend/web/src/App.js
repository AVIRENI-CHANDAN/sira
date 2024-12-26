import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './components/Pages/AuthPage/AuthPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={
        <Navigate to="/auth" />
      } />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
