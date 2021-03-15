import React, { useContext } from 'react';
import './Card.scss';
import { Link, matchPath } from 'react-router-dom';
import routes from '../../routes';
import PostsData from 'src/contexts/postsdata';

const Card = ({id, tagHandler}) => {
    const postsData = useContext(PostsData);
    const link = '/' + postsData[id].markdown;

    const findComponentForRoute = (path, routes) => {
        const matchingRoute = routes.find(route =>
            matchPath(path, {
            path: route.path,
            exact: route.exact
            })
        );
    
        return matchingRoute ? matchingRoute.component : null;
    };

    const preloadRouteComponent = (path) => {
        const component = findComponentForRoute(path, routes);
        if (component && component.preload) {
            component.preload();
        }
    };

    return (
        <div className="card">
            <Link to={link} className="link" onMouseOver={() => preloadRouteComponent(link)}>{postsData[id].title}</Link>
            <p>{postsData[id].description}</p>
            <div className="card-tags">
                {
                    postsData[id].tags.map((tag) => (
                        <div key={tag} className="card-tag" onClick={() => tagHandler(tag)}>{tag}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;