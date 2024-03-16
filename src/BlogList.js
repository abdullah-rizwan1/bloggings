const BlogList = (props) => {
  return props.blogs.map((blog) => {
    return (
      <div className="blog-preview" key={blog.id}>
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-author">Author: {blog.author}</p>
      </div>
    )
  })
}

export default BlogList
