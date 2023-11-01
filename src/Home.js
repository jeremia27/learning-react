import React from 'react'

export default function Home() {

  const handleClick = (e) => {
    console.log("Hello Ninjas" + e);
  }

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e.target);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('ayang', e)}>Click me again</button>
    </div>
  )
}
