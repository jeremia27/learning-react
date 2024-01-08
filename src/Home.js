import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'

export default function Home() {

  //NET NINJA

  //Event on React done
  //UseHook done
  //Outputting List
  //Fetching Data
  //Conditional Loading


  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id );
  //   setBlogs(newBlogs);
  // }

  const [name, setName] = useState('mario');


  useEffect(() => {
    console.log("useEffect run");
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok){
            throw Error('could not acces the resource')
          }
          // console.log(res);
          return res.json()
        })
        .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          // console.log(err.message);
          setError(err.message);
          setIsPending(false);
        })
    }, 1000);

  }, []);


  return (
    <div className='home'>
    {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario Blogs!" /> */}
      {/* <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p> */}

    </div>
  )
}
