import React, { useState, useEffect } from 'react';
import {Navigate, useNavigate} from "react-router-dom"
import BookingForm from './BookingForm';
import './index.css'

function ShowList() {
  const [shows, setShows] = useState([]);
 
  const [selectedShow, setSelectedShow] = useState(null);
  const history = useNavigate();
  

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  }

    // Open the form to book a ticket here
  const handleClick = () => {
    history("/BookingForm");
  };

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };


  if (selectedShow) {
    return (
      <div>
        <h1>{selectedShow.name}</h1>
        <p>Language: {selectedShow.language}</p>
        <p>{selectedShow.summary}</p>
        <button onClick={handleClick}>Book a ticket</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Show List</h1>
      {/* <ul> */}
      <div className="card-container">
        {shows.map(value => (
          <div className="card" key={value.show.id}>
            <p>Name: {value.show.name}</p>
            <p>Genre: {value.show.genres}</p>
            <p>Language: {value.show.language}</p>
            <button onClick={() => handleShowSelect(value.show)}>View summary</button>
          </div>
        ))}
        </div>
      {/* </ul> */}
    </div>
  );
}

export default ShowList;
