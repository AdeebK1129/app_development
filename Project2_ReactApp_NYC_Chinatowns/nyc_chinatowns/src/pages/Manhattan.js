import React from 'react';
import Card from '../components/Card';
import manhattan1 from '../assets/images/manhattan/manhattan1.jpg';
import manhattan2 from '../assets/images/manhattan/manhattan2.jpg';
import joesshanghai from '../assets/images/manhattan/joesshanghai.webp';
import wohop from '../assets/images/manhattan/wohop.jpg';
import greatnoodle from '../assets/images/manhattan/greatnoodle.webp';
import meilaiwah from '../assets/images/manhattan/meilaiwah.jpg';
import nomwah from '../assets/images/manhattan/nomwah.jpg';
import wahfung from '../assets/images/manhattan/wahfung.avif';

function Manhattan() {
  return (
    <div>
      <h1>Manhattan Chinatown</h1>
      <p>Manhattan’s Chinatown is the oldest and most iconic of the three, dating back to the late 19th century. It has served as the cultural epicenter for Chinese immigrants in America for over a century. Walking through its narrow, bustling streets, visitors can explore historic landmarks, traditional shops, and authentic eateries that offer a taste of China in the heart of Manhattan. Despite facing challenges like gentrification, Manhattan’s Chinatown remains a vibrant and essential part of New York City’s cultural landscape, celebrated for its resilience, history, and ongoing contributions to the city’s diversity.</p>
      <div className="card-group">
        <Card title="Joe's Shanghai" image={joesshanghai} description="Famous for its soup dumplings, Joe’s Shanghai is a must-visit for anyone looking to experience the iconic xiao long bao. The restaurant also serves a variety of other Shanghainese dishes." />
        <Card title="Wo Hop" image={wohop} description="Open since 1938, Wo Hop is a basement-level spot that’s famous for its late-night hours and classic Cantonese-American dishes like lo mein, fried rice, and egg foo young." />
        <Card title="Great NY Noodletown" image={greatnoodle} description="Known for its roast meats, particularly the roast duck and pork, Great NY Noodletown also serves a variety of Cantonese noodle dishes that are beloved by locals and tourists alike." />
        <Card title="Mei Lai Wah Bakery" image={meilaiwah} description="This classic bakery is known for its baked and steamed buns, particularly the char siu (barbecue pork) buns, which are some of the best in the city." />
        <Card title="Nom Wah Tea Parlor" image={nomwah} description="The oldest dim sum restaurant in Chinatown, Nom Wah Tea Parlor is known for its nostalgic atmosphere and classic dim sum dishes, making it a popular spot for both locals and tourists." />
        <Card title="Wah Fung No. 1 Fast Food" image={wahfung} description="Famous for its affordable and delicious roast pork over rice, Wah Fung No. 1 is a go-to spot for quick, flavorful Chinese BBQ." />
      </div>
    </div>
  );
}

export default Manhattan;
