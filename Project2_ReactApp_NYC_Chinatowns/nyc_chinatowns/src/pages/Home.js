import React from 'react';
import Card from '../components/Card';
import flushingImg from '../assets/images/flushing/flushing1.jpg';
import brooklynImg from '../assets/images/brooklyn/brooklyn1.jpg';
import manhattanImg from '../assets/images/manhattan/manhattan1.jpg';

function Home() {
  return (
    <div>
      <h1>Explore Cuisine from the Chinatowns of NYC</h1>
      <p>New York City is home to some of the most culturally rich and vibrant neighborhoods in the world, and its Chinatowns are no exception. Each of the city’s three major Chinatowns—Flushing, Brooklyn, and Manhattan—offers a unique glimpse into the lives, traditions, and histories of Chinese-American communities that have thrived in these neighborhoods for generations.</p>
      <div className="card-group">
        <Card title="Flushing Chinatown" image={flushingImg} description="Experience the vibrant culture of Flushing's Chinatown." link="/flushing" />
        <Card title="Brooklyn Chinatown" image={brooklynImg} description="Discover the hidden gem of Brooklyn's 8th Avenue Chinatown." link="/brooklyn" />
        <Card title="Manhattan Chinatown" image={manhattanImg} description="Explore the historic streets of Manhattan's Chinatown." link="/manhattan" />
      </div>
    </div>
  );
}

export default Home;
