import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const BusinessItem = props => {
    const history = useHistory();

    const addToFavorites = useCallback(() => {
        // check if logged in
        console.log(props);
    }, [props]);

    const style = {
        backgroundImage: `url(${props.image_url})`,
    };

    return (
        <li className="business-item" style={style}>
            <div
                className="btn-add-favorite" 
                onClick={addToFavorites}>
                Add to Favorites
            </div>
            <span>{props.name}</span>
        </li>
    );
};

const BusinessesList = ({ results, error }) => {
    if (!!error) {
        return (<span className="error">{error}</span>)
    }

    return (<ul className="businesses-list">{results.map(business => (<BusinessItem key={business.id} {...business} />))}</ul>);
};

export default BusinessesList;
