import React, { useState, useContext } from 'react';
import Card from './Card';
import PostsData from 'src/contexts/postsdata';

import './CardContainer.scss';

const CardContainer = () => {
    const [tag, setTag] = useState('all');
    
    const CardList = () => {
        const postsData = useContext(PostsData);
        const tagSet = new Set(['all']);
        let data = [];
        for (let key in postsData) {
            postsData[key].tags.forEach(t => tagSet.add(t));
            if (tag === 'all' || postsData[key].tags.includes(tag)) {
                data.push(postsData[key]);
            }
        }
        
        const tagArr = Array.from(tagSet);
        let ret = [
            <div key={"main-tags-key"} className="tags">
                {tagArr.map((t) => (
                    <div key={t} className="tag" onClick={() => setTag(t)}>{t}</div>
                ))}
            </div>,
            <h2 key={"main-tag-key"}>{tag} ({data.length})</h2>,
            data.map((post) => (
                <Card key={post.id} id={post.markdown} setTag={setTag}/>
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