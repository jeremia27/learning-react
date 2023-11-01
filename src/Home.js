import React, { useState } from 'react'

export default function Home() {

  //Event on React done
  //UseHook done
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName('luigi');
    setAge(30);
  }

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('ayang', e)}>Click me again</button>
    </div>
  )
}
