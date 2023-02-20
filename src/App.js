import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import ShowList from './ShowList';
import { BrowserRouter ,Routes, Router, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ShowList/>} />
      <Route path="/BookingForm" element={<BookingForm/>} />
        // Other routes can go here
      </Routes> 
    </BrowserRouter>
  );
}
export default App;