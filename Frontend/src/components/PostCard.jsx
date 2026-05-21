import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';   

const PostCard = ({ post }) => {
  
  const imgSrc = post.image ;
 
  const categoryName = post.category?.name || 'Uncategorized';

  const shortBody =
    post.body?.length > 120 ? post.body.substring(0, 120) + '...' : post.body;

  return (
    <div className="card post-card h-100">
   
      <img src={imgSrc} alt={post.title} className="card-img-top" />

      <div className="card-body d-flex flex-column">
  
        <span className="badge-category mb-2 d-inline-block">
          {categoryName}
        </span>

        <h5 className="card-title">{post.title}</h5>

        <p className="card-text text-muted flex-grow-1 post-preview-text">
          {shortBody}
        </p>

        
        <Link to={`/post/${post._id}`} className="btn btn-read mt-2 align-self-start">
          Read More <i className="bi bi-arrow-right ms-1"></i>
        </Link>
      </div>

  
    </div>
  );
};

export default PostCard;