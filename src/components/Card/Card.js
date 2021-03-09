import React, { useContext } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import PostsData from 'src/contexts/postsdata';

const Card = ({id, setTag}) => {
    const postsData = useContext(PostsData);
    const link = '/' + postsData[id].markdown;
    return (
        <div className="card">
            <Link to={link} className="link">{postsData[id].title}</Link>
            <p>{postsData[id].description}</p>
            <div className="card-tags">
                {
                    postsData[id].tags.map((tag) => (
                        <div key={tag} className="card-tag" onClick={() => setTag(tag)}>{tag}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;