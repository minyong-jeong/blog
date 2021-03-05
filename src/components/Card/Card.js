import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div className="card">
            <h1>Bubble Sort (버블정렬)</h1>
            <p>버블소트는 인접한 요소들을 비교하여 정렬하는 알고리즘입니다. 인접한 두개의 요소들을 비교하여 크기가 순서대로 되어있지 않으면 서로 변경합니다. O(n^2)의 시간복잡도를 가지지만 코드가 단순하여 자주 사용됩니다.</p>
            <div className="tags">
                <div className="tag">tag1</div>
                <div className="tag">tag2</div>
                <div className="tag">tag3</div>
            </div>
        </div>
    );
};

export default Card;