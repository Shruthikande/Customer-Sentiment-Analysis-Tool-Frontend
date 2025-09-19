// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home'; // Example page
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Logout from './Component/Logout';
import About from './Component/About';
import Signup from './Component/Signup';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Results from './pages/Results';
import Reports from './pages/Reports';
import Trends from './pages/Trends';
import Messages from './pages/Messages';
import Feedback from './pages/Feedback';
import AdminUsers from './pages/admin/Users';
import AdminLogs from './pages/admin/Logs';
import TrainModel from './pages/admin/TrainModel';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/trends" element={<ProtectedRoute><Trends /></ProtectedRoute>} />
            <Route path="/messages" element={<ProtectedRoute roles={["admin","manager"]}><Messages /></ProtectedRoute>} />
            <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />

            <Route path="/admin/users" element={<ProtectedRoute roles={["admin"]}><AdminUsers /></ProtectedRoute>} />
            <Route path="/admin/logs" element={<ProtectedRoute roles={["admin"]}><AdminLogs /></ProtectedRoute>} />
            <Route path="/admin/train" element={<ProtectedRoute roles={["admin"]}><TrainModel /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
