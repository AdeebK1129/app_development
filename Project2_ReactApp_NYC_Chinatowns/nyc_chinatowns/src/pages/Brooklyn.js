import React from 'react';
import Card from '../components/Card';
import baxuyen from '../assets/images/brooklyn/baxuyen.jpg';
import kaifengfu from '../assets/images/brooklyn/kaifengfu.jpg';
import brooklyn2 from '../assets/images/brooklyn/brooklyn2.jpg';
import yunnan from '../assets/images/brooklyn/yunnan.jpg';
import lucky8 from '../assets/images/brooklyn/lucky8.jpg';
import xinfa from '../assets/images/brooklyn/xinfa.jpg';
import roast28 from '../assets/images/brooklyn/roast28.jpg';


function Brooklyn() {
  return (
    <div>
      <h1>Brooklyn Chinatown</h1>
      <p>Brooklyn’s Chinatown, situated along 8th Avenue in Sunset Park, is a hidden gem that offers a more intimate and authentic experience compared to its more famous counterparts. This neighborhood is home to a tight-knit community that has preserved many traditional aspects of Chinese culture, from family-owned herbal shops to bustling dim sum restaurants. Brooklyn’s Chinatown is a place where old-world charm meets the energy of a modern city, providing a unique cultural experience in the heart of Brooklyn.</p>
      <div className="card-group">
        <Card title="Ba Xuyên" image={baxuyen} description="Known for its bánh mì sandwiches, Ba Xuyên serves fresh, crusty bread stuffed with various meats, pickled vegetables, and a delicious blend of sauces. It’s a local favorite and a must-visit spot in Brooklyn’s Chinatown." />
        <Card title="Kai Feng Fu Dumpling House" image={kaifengfu} description="Famous for its incredibly cheap and delicious dumplings, Kai Feng Fu is a small, no-frills spot where you can get a plate of dumplings (fried or steamed) for just a few dollars." />
        <Card title="Yunnan Flavour Garden" image={yunnan} description="This spot specializes in Yunnan-style rice noodles, with dishes like crossing-the-bridge noodles and spicy beef noodle soup. The flavors are unique, representing the Yunnan province in China." />
        <Card title="Lucky Eight" image={lucky8} description="A staple for Cantonese food, Lucky Eight is known for its roast meats, particularly the crispy-skinned roast pork, and a variety of other traditional Cantonese dishes." />
        <Card title="Xin Fa Bakery" image={xinfa} description="Known for its fresh and authentic Chinese pastries, Xin Fa Bakery is a staple in Brooklyn’s Chinatown. The bakery is especially famous for its egg tarts, which feature a flaky crust and smooth, custardy filling." />
        <Card title="Roast 28" image={roast28} description="Known for its perfectly crispy roast duck and other traditional Chinese BBQ meats, Roast 28 is a popular spot for locals seeking authentic flavors." />
      </div>
    </div>
  );
}

export default Brooklyn;
