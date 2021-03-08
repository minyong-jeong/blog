import React from 'react';
import Card from './Card';

import postsData from 'src/posts/posts.json';

import './CardContainer.scss';

const CardContainer = () => {
    return (
        <div className="card-container">
            <h2>All ({postsData["posts"].length})</h2>
            {
                postsData["posts"].map((post) => (
                    <Card key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default CardContainer;