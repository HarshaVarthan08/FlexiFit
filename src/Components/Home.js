import React from 'react';
import './Home.css';
import TrainerCard from './TrainerCard';
import Footer from './Footer';
import t1 from './b1.jpeg';
import t2 from './b2.jpeg';
import t3 from './f3.jpeg';
import Navbar from './Navbar';

const trainers = [
  {
    image: t1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890'
  },
  {
    image: t2,
    name: 'Julie Smith',
    email: 'julie@example.com',
    phone: '098-765-4321'
  },
 

];

const Home = () => {
  return (
    <div>

    <Navbar />
    
      <div className="hc">
        <h1>Welcome to Fitness Tracker</h1>
        <p>Your journey to a healthier life starts here. Track your workouts, monitor your progress, and achieve your fitness goals.</p>
      </div>

      <div className="trainer-list">
        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1.5em', marginBottom: '20px', color: 'white' }}>
          SUPPORT TRAINERS
        </p>
        
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={index}
            image={trainer.image}
            name={trainer.name}
            email={trainer.email}
            phone={trainer.phone}
          />
        ))}
      </div>

      <Footer />
    
    </div>
    
  );
}

export default Home;
