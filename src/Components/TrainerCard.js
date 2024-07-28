import React from 'react';
import './TrainerCard.css'; 

const TrainerCard = ({ image, name, email, phone }) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={`${name}`} className="trainer-image" />
      <div className="trainer-details">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default TrainerCard;
