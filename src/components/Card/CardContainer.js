import React from 'react';
import Card from './Card';

import './CardContainer.scss';

const CardContainer = () => {
    return (
        <div className="card-container">
            <h3>태그이름 (10)</h3>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardContainer;