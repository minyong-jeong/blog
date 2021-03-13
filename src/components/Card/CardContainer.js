import React, { useState, useContext } from 'react';
import Card from './Card';
import Pagination from './Pagination';
import PostsData from 'src/contexts/postsdata';

import './CardContainer.scss';
import _ from 'lodash';

const CardContainer = () => {
    const postsData = useContext(PostsData);
    const [tag, setTag] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [pagedPosts, setPagedPosts] = useState(Object.values(postsData).slice(0, 8));
    const [postCount, setPostCount] = useState(Object.values(postsData).length);
    const pageSize = 8;

    const pageHandler = (pageNum, t=tag) => {
        const d = _.pickBy(postsData, (post) => t === 'all' || post.tags.includes(t));
        const items = Object.values(d);
        const startIndex = (pageNum - 1) * pageSize;
        setPostCount(items.length);
        setPagedPosts(
            _(items)
            .slice(startIndex)
            .take(pageSize)
            .value()
        );
        setCurrentPage(pageNum);
        setTag(t);
    }

    const tagHandler = (t) => {
        pageHandler(1, t);
    }

    const TagList = () => {
        const tagSet = new Set(['all']);
        for (let key in postsData) {
            postsData[key].tags.forEach(t => tagSet.add(t));
        }
        const tList = Array.from(tagSet);
        return (
            <div key={"main-tags-key"} className="tags">
                {tList.map((t) => (
                    <div key={t} className="tag" onClick={() => {pageHandler(1, t)}}>{t}</div>
                ))}
            </div>
        )
    }

    return (
        <div className="card-container">
            <TagList />
            <h2 key={"main-tag-key"}>{tag} ({postCount})</h2>
            {pagedPosts.map((post) => (
                <Card key={post.id} id={post.markdown} tagHandler={tagHandler}/>
            ))}
            <Pagination key="pagenation" currentPage={currentPage} postCount={postCount} pageSize={pageSize} pageHandler={pageHandler}/>
        </div>
    );
};

export default CardContainer;