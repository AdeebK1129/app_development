import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import flowers from "./images/image1.jpg";
import User from './comments';
import businessman from "./images/businessman_avatar.png";
import child from "./images/child_avatar.png";
import customer from "./images/customer_avatar.png";

//create content in the app using function component
const App = function(){
  // define a variable name
  let fullname = "Adeeb Khan";
  // declare a function
  function greeting(){
    return "Good evening!";
  }
  return(
    <div>
      <h1 style={{textAlign:"center", color:"orange"}}>Welcome to React JS {fullname}</h1>
      <p>{greeting()} Let's be familiar with JSX elements</p>
      <h2 style={{color:"magenta", textAlign:"center"}}>Inline Styling</h2>
      <figure className="introImg">
        <img src = {flowers}/>
      </figure>

      {/* Card */}
      <section className='cardcontainer'>
        <User image={child} name='Jessica' date='07/26/2024' comments='Great Job!'/>
        <User image={businessman} name='Peter' date='07/12/2024' comments='I need more time'/>
        <User image={customer} name='Jason' date='07/22/2024' comments='Feeling lazy'/>
      </section>
    </div>
  )
}


// rooting the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


