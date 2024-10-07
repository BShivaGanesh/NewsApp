import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 5;

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          {/* Ensure the root path loads the "general" category */}
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country="us"
                pageSize={pageSize}
                category="general"
              />
            }
          />

          {/* Other routes */}
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                country="us"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                country="us"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                country="us"
                pageSize={pageSize}
                category="general"
              />
            }
          />
           <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                country="us"
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                country="us"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                country="us"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
            <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                country="us"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        
       
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
