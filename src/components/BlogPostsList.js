import React from 'react';

class BlogPostsList extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const {posts} = this.props;
    return (
      <ul>
        {posts && posts.map(post => (<li key={ post.id }> { post.title } </li>))}
      </ul>  
    );
  }

}

export default BlogPostsList;