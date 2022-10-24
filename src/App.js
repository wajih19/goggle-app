import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results";
import { Routes, Route , Navigate} from 'react-router-dom';

const App=()=> {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark': ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar 
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}/>
        <Routes>
        <Route
          path="/"
          element={

           <Navigate replace to="/search" />

          }
        />
          <Route path="/search" element={<Results />} />
          <Route path="/images" element={<Results/>} />
          <Route path="/videos" element={<Results/>} />
          <Route path="/news" element={<Results/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
  }
export default App
