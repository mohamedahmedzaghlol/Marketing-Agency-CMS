import React, { useState } from 'react';
import PostCard from '../../components/PostCard';
import './HomePage.css';

import i20 from '../../assets/download (1).jpg';
import focus from '../../assets/download (2).jpg';
import golf from '../../assets/download (3).jpg';
import tyota from '../../assets/download (4).jpg'
import tyota1 from '../../assets/download (5).jpg'
import tyota2 from '../../assets/download (6).jpg'
import POSTS_DATA from '../../data/data';

const CATEGORIES = [
  ...new Map(POSTS_DATA.map(p => [p.category._id, p.category])).values()
];


const HomePage = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');

  
  const filteredPosts =
    selectedCategory === 'all'
      ? POSTS_DATA
      : POSTS_DATA.filter(p => p.category._id === selectedCategory);

  return (
    <>
   
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Welcome to AgencyCMS</h1>
          <p className="lead mb-0 hero-subtitle">
            Insights, stories, and updates from our marketing team.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">

       
          <div className="d-flex flex-wrap gap-2 mb-4">
            <button
              className={`btn btn-outline-secondary category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Posts
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat._id}
                className={`btn btn-outline-secondary category-btn ${selectedCategory === cat._id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat._id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

  
          {filteredPosts.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <i className="bi bi-inbox empty-inbox-icon"></i>
              <p className="mt-3">No posts found in this category.</p>
            </div>
          ) : (
  
            <div className="row g-4">
              {filteredPosts.map(post => (
                <div key={post._id} className="col-sm-6 col-lg-4">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default HomePage;