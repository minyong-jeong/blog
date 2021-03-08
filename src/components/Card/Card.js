import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({post, setTag}) => {
    const link = '/' + post.markdown;
    return (
        <div className="card">
            <Link to={link} className="link">{post.title}</Link>
            <p>{post.description}</p>
            <div className="card-tags">
                {
                    post.tags.map((tag) => (
                        <div key={tag} className="card-tag" onClick={() => setTag(tag)}>{tag}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;