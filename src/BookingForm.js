import React, { useState,useEffect } from 'react';
import './App.css'
const BookingForm = () => {
  // const [items,setItems]=useState([])
  const [formData, setFormData] = useState([]);
  const [movie, setMovie] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleMovieChange = (e) => {
    setMovie(e.target.value);
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let store={movie,name,email};

    setFormData([...formData,store])
    setMovie('');
    setName('');
    setEmail('');
   
    alert('Registration successful!');
  }
  useEffect(()=>{
    localStorage.setItem('formData', JSON.stringify(formData));
  },[formData])

  return (
    <div className="registration-form-container">
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2 className="registration-form__title">Book Your Ticket</h2>

      <div className="registration-form__group">
         <label>
         Movie:
         <input type="text" value={movie} onChange={handleMovieChange} />
         </label>
        
      </div>

      <div className="registration-form__group">
        <label>
         Name:
         <input type="text" value={name} onChange={handleNameChange} />
       </label>
      </div>

      <div className="registration-form__group">
      <label>
         Email:
         <input type="email" value={email} onChange={handleEmailChange} />
       </label>
       <br />
      </div>

      <button className="registration-form__submit" type="submit">Book Ticket</button>
    </form>
    </div>
  );
};
export default BookingForm;
