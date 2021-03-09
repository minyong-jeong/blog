import React, { useEffect, useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import PostsData from 'src/contexts/postsdata';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Post.scss';

const renderers = {
    code: ({language, value}) => {
        return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
    }
}

const Post = ({match}) => {
    const [markdown, setMarkdown] = useState(null);
    const postsData = useContext(PostsData);

    useEffect(() => {
        readMarkdown();
    })

    async function readMarkdown() {
        const MD = await import('src/posts/' + postsData[match.params.markdown].path);
        const response = await fetch(MD.default);
        const text = await response.text();
        setMarkdown(text);
    }

    return (
        <div className="post">
            <div className="markdown">
                <ReactMarkdown renderers={renderers} children={markdown} allowDangerousHtml />
            </div>
        </div>
    );
};

export default Post;