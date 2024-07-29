import React, { useState } from 'react';

function App() {
  // set the state example 1
  const [count, setCount] = useState(0);

  // set the state example 2
  const [counter, setCounter] = useState(1);

  // set the state example 3
  const [isOpen, setIsOpen] = useState(false);

  // set the state example 4
  // collecting multiple input data as states
  const [inputdata, setInputData] = useState({});

  // ----- EXAMPLE 1 -----

  // event handler function
  const increment = () => {
    setCount(count + 1);
  }

  // ----- EXAMPLE 2 -----

  // list of three messages
  const messages = ["I think, therefore I am", "I have a dream", "The only thing we have to fear is fear itself"]

  // add event listener to next button
  const nextAction = () => {
    if(counter < 3){
      setCounter(counter + 1);
    }
  }

  const prevAction = () => {
    if(counter > 1){
      setCounter(counter - 1);
    }
  }

  // ----- EXAMPLE 3 -----

  // add evemt listener for read more button
  const toggleReadMore= () => {
    setIsOpen(!isOpen);
  }

  // ----- EXAMPLE 4 -----

  // add event listener for form submission
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Name: ${inputdata.fullname} \nAge: ${inputdata.age} \nGender: ${inputdata.gender} \nComments: ${inputdata.usercomments}`);
  }

  // function to collect changes of input data
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData(values => ({...values, [name]:value})); // spread
  }



  return (
    <>
      <h1 className='title'>Example 1: Counter</h1>
      <p>The count is = {count}</p>
      <button className="incrementbtn" onClick={increment}>Increment</button>
      <h1 className='title'>Example 2: Slice App</h1>
      <section className='sliceContainer'>
        <div className='sliceWrapper'>
          <div className={counter === 1 ? 'active':''}>1</div>
          <div className={counter === 2 ? 'active':''}>2</div>
          <div className={counter === 3 ? 'active':''}>3</div>
        </div>

        <p className='displayMsg'>Message {counter} = "{messages[counter-1]}"</p>

        <div className='groupBtn'>
          <button className='prev_btn' onClick={prevAction}>Prev</button>
          <button className='next_btn' onClick={nextAction}>Next</button>
        </div>
      </section>

      <h1 className='title'>Example 3: Open and Close Button</h1>
      <section className='intro'>
        <b>Cat (Felis catus)</b> , commonly referred to as the domestic cat or house cat
        <button className="readMoreBtn" onClick={toggleReadMore}>{isOpen ? "Hide" : "Read More" }</button>
      </section>
      <section>
        { isOpen && 
          (
          <div className='readMore'>
            The cat (Felis catus), commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC
          </div>
          )
        }
      </section>

      <h1 className='title'>Example 4: Forms</h1>
      <section>
        <form className='signUpForm' onSubmit={submitForm}>
          <fieldset>
            <legend>Sign Up Form</legend>
            <div className='formControl'>
              <label htmlFor="name">Enter Name: </label>
              <input 
              id="name" 
              type="text" 
              placeholder="Name"
              name="fullname"
              value={inputdata.fullname}
              onChange={handleData}
              />
            </div>

            <div className='formControl'>
              <label htmlFor='age'>Enter an Age: </label>
              <input
                id="age"
                type="number"
                name="age"
                min={1}
                value={inputdata.age}
                onChange={handleData}
              />
            </div>

            <div className='formControl'>
              <label htmlFor='gender'>Select Gender: </label>
              <select 
                id="selectgender"
                value={inputdata.gender}
                name="gender"
                onChange={handleData}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className='formControl'>
              <label htmlFor='comments'>Suggestions?</label>
              <textarea
                id="comments"
                placeholder='Max 1000 Characters'
                maxLength={1000}
                name="usercomments"
                value={inputdata.usercomments}
                onChange={handleData}
              />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default App;
