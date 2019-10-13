import React from 'react';
import BlogPostsList from './BlogPostsList';

class BlogPostsListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.posts = [
      {
        id: 1,
        title: "Hello"
      },
      {
        id: 2,
        title: "Hello 2"
      }
    ]
  }


  render() {
    return (
      <BlogPostsList posts={this.posts} />
    )
  }

}

export default BlogPostsListContainer; 