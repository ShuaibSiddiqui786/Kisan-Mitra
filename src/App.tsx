import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ChatBot from './components/ChatBot';
import Weather from './pages/Weather';
import Calculator from './pages/Calculator';
import Market from './pages/Market';
import Learn from './pages/Learn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="weather" element={<Weather />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="market" element={<Market />} />
          <Route path="learn" element={<Learn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;