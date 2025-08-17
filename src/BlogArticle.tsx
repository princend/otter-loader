import React from 'react';
import './BlogArticle.scss';

interface BlogArticleProps {
  image: string;
  title: string;
  content: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ image, title, content }) => {
  return (
    <div className="blog-article d-flex align-items-center bg-white rounded shadow-sm p-3 mb-4">
      <div className="blog-article-img me-4">
        <img src={image} alt={title} style={{ maxWidth: 180, borderRadius: 12 }} />
      </div>
      <div className="blog-article-content">
        <h3 className="h5 mb-2">{title}</h3>
        <div style={{ color: '#444', fontSize: 16, lineHeight: 1.7 }}>{content}</div>
      </div>
    </div>
  );
};

export default BlogArticle;
