import React, { useState } from 'react'

export default function Home() {

  //NET NINJA
  
  //Event on React done
  //UseHook done
  //Outputting List
  

  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum..", author: "mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum..", author: "luigi", id: 2 },
    { title: "Web dev top", body: "lorem ipsum..", author: "smith", id: 3 }
  ])


  return (
    <div className='home'>
      {
        blogs.map((blog, index) => (
          <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>write by {blog.author}</p>

          </div>

        ))
      }

    </div>
  )
}
