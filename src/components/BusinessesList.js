import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import './businessesList.css';

const BusinessItem = props => {
    const history = useHistory();

    const addToFavorites = useCallback(() => {
        // check if logged in
        history.push('/login');
    }, [history]);

    console.log(props);
    return (
        <li>
            <span>{props.name}</span>
            <div
                className="btn-add-favorite" 
                onClick={addToFavorites}>
                Add to Favorites
            </div>
        </li>
    );
};

const BusinessesList = ({ results, error }) => {
    if (!!error) {
        return (<span className="error">{error}</span>)
    }

    return (<ul>{results.map(business => (<BusinessItem key={business.id} {...business} />))}</ul>);
};

export default BusinessesList;
