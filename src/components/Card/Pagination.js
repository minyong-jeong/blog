import React from 'react';
import _ from 'lodash';

import './Pagination.scss';

const Pagination = ({currentPage, postCount, pageSize, pageHandler}) => {
    const pageCount = Math.ceil(postCount / pageSize);
    
    if (pageCount === 1) {
        return null;
    }

    const pages = _.range(1, pageCount + 1);

    return (
        <div className="pagination">
            {
                pages.map(page=> (
                    <div
                        key={`pagination-${page}`}
                        className={page === currentPage ? "page-item active" : "page-item"}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="page-link" onMouseDown={() => pageHandler(page)}>{page}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Pagination;