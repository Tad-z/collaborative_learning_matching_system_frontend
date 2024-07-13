import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/LogIn';
import DataUpload from './components/DataUpload';
import Display from './components/Display';
import 'react-toastify/dist/ReactToastify.css';
import { DotLoader } from 'react-spinners';
import './App.css'

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div>
            <DotLoader size={60} color="#5e4c34" loading={loading} />
          </div>
        </div>
      ) : (
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/upload" element={<DataUpload />} />
              <Route path="/display" element={<Display />} />
            </Routes>
            <ToastContainer position="top-center" limit={1} autoClose={3000} />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
