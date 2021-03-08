import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({post}) => {
    const link = '/post/' + post.markdown;
    return (
        <Link to={link} className="card">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="tags">
                {
                    post.tags.map((tag) => (
                        <div key={tag} className="tag">{tag}</div>
                    ))
                }
            </div>
        </Link>
    );
};

export default Card;