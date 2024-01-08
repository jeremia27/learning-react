import React from 'react'

export default function BlogList({ blogs, title }) {

  // console.log("data blog", blogs);
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
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
