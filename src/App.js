import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Resume from './components/Resume';
import View from './components/View';


const App = () => {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume/view" element={<View />} />
        </Routes>
      </Layout>
    </BrowserRouter>


  )
}

export default App