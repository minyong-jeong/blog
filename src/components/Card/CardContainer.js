import React, { useState } from 'react';
import Card from './Card';

import postsData from 'src/posts/posts.json';

import './CardContainer.scss';

const CardContainer = () => {
    const [tag, setTag] = useState('all');
    
    const CardList = () => {
        const tagSet = new Set(['all']);
        let data = [];
        postsData["posts"].map((post) => {
            post.tags.forEach(t => tagSet.add(t));
            if (tag === 'all' || post.tags.includes(tag)) {
                data.push(post);
            }
        });
        
        const tagArr = Array.from(tagSet);
        let ret = [
            <div key={"main-tags-key"} className="tags">
                {tagArr.map((t) => (
                    <div key={t} className="tag" onClick={() => setTag(t)}>{t}</div>
                ))}
            </div>,
            <h2 key={"main-tag-key"}>{tag} ({data.length})</h2>,
            data.map((post) => (
                <Card key={post.id} post={post} setTag={setTag}/>
            )),
        ];
    
        return ret;
    }

    return (
        <div className="card-container">
            <CardList />
        </div>
    );
};

export default CardContainer;