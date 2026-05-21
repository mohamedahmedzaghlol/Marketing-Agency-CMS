import React from 'react';
import { useParams, Link } from 'react-router-dom';
import POSTS_DATA from '../../data/data'; 
import './PostDetailPage.css';
const PostDetailPage = () => {
  const { id } = useParams(); 
  const post = POSTS_DATA.find(p => p._id === id);

  if (!post) {
    return (
      <div className="container text-center bg-primary">
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-triangle me-2"></i> Post not found.
        </div>
        <Link to="/" className="btn btn-outline-secondary">← Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="">
      <div className="container post-detail-container ">

        {/* Category badge */}
        <div className="mb-2">
          <span className="badge-category">{post.category?.name || 'Uncategorized'}</span>
        </div>

        {/* Title */}
        <h1 className="mb-3 post-detail-title">{post.title}</h1>

        {/* Image */}
        <img
          src={post.image }
          alt={post.title}
          className="post-detail-img "
        />

        {/* Body */}
        <div className="post-body-content">
          {post.body.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <hr className="my-5" />

        <Link to="/" className="btn btn-outline-secondary">
          <i className="bi bi-arrow-left me-2"></i>Back to Home
        </Link>

      </div>
    </section>
  );
};

export default PostDetailPage;