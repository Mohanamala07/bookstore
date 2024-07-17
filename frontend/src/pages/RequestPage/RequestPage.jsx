import React, { useState } from 'react';
import './RequestPage.css'; // Assume you have a CSS file for styling

const RequestPage = () => {
  const [formData, setFormData] = useState({
    isbn13: '',
    title: '',
    author: '',
    quantity: 1,
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData, null, 2));
    // Here you can add your code to handle form submission, like sending the data to an API
  };

  return (
    <>
    <div className="request-header">
    REQUEST A BOOK
  </div>
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="isbn13">ISBN13: *</label>
          <input 
            type="text" 
            id="isbn13" 
            name="isbn13" 
            value={formData.isbn13} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Book Title: *</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input 
            type="text" 
            id="author" 
            name="author" 
            value={formData.author} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input 
            type="number" 
            id="quantity" 
            name="quantity" 
            min="1" 
            value={formData.quantity} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id: *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <input 
            type="submit" 
            value="Submit" 
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default RequestPage;
