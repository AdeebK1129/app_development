import React from 'react';
import Card from '../components/Card';
import flushing1 from '../assets/images/flushing/flushing1.jpg';
import flushing2 from '../assets/images/flushing/flushing2.jpg';
import joes from '../assets/images/flushing/joessteamriceroll.jpg';
import whitebear from '../assets/images/flushing/whitebear.png';
import nanxiang from '../assets/images/flushing/nanxiangxiaolongbao.jpeg';
import asianjewel from '../assets/images/flushing/asianjewel.jpg';
import corner28 from '../assets/images/flushing/corner28.jpg';
import laoma from '../assets/images/flushing/laoma.jpg';


function Flushing() {
  return (
    <div>
      <h1>Flushing Chinatown</h1>
      <p>Flushing, located in Queens, is the largest and fastest-growing Chinatown in New York City. Known for its bustling streets, diverse food markets, and authentic cuisine, Flushing is a modern-day hub for Chinese immigrants and Chinese-Americans alike. From its historic temples to its state-of-the-art shopping centers, Flushing offers a dynamic blend of the old and the new, making it a must-visit for anyone seeking to experience the vibrant culture of NYC’s Chinese community.</p>
      <div className="card-group">
        <Card title="Joe’s Steam Rice Roll" image={joes} description="Famous for their Hong Kong-style steamed rice rolls, Joe's offers a variety of fillings like shrimp, scallions, and bean sprouts, all garnished with creamy peanut sauce, tangy black vinegar, and spicy chili oil." />
        <Card title="White Bear" image={whitebear} description="This tiny spot is known for its spicy wontons, specifically the number 6 order, which includes delicate wrappers filled with pork and generously drizzled with chili oil and pickled vegetables." />
        <Card title="Nan Xiang Xiao Long Bao" image={nanxiang} description="Known for some of the best xiao long bao (soup dumplings) in New York City, Nan Xiang offers dumplings with paper-thin wrappers that contain a sizzling broth and a savory filling of pork and crabmeat." />
        <Card title="Asian Jewels Seafood Restaurant" image={asianjewel} description="A go-to place for dim sum, Asian Jewels is popular for its har gow, shumai, and other traditional Cantonese dishes served in a grand dining room, perfect for large groups." />
        <Card title="Corner 28" image={corner28} description="This is the place to get $1 Peking duck buns. Corner 28 also offers a variety of deli-style counters with options ranging from boneless spare ribs to garlicky bok choy." />
        <Card title="Lao Ma Ma La Tang" image={laoma} description="Specializing in spicy Sichuan-style hot pot, Lao Ma Ma La Tang offers a customizable dining experience with a variety of fresh ingredients and rich, flavorful broths." />
      </div>
    </div>
  );
}

export default Flushing;
