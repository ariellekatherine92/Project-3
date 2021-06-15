import axios from 'axios';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const BusinessItem = props => {
    const { user, id, businessType } = props;

    const history = useHistory();

    const addToFavorites = useCallback((e) => {
        console.log('ADD FAVORITE', user);
        e.preventDefault();
        // check if logged in
        if (!!user) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/api/favorites`, {
                businessId: id,
                userId: user.id,
                name: 'test',
                businessType,
            }).then(resp => {
                history.push('/favorites');
            }, error => {
                console.error(error);
            });
        } else {
            history.push('/login');
        }
    }, [user, id, businessType, history]);

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

const BusinessesList = ({ results, error, user, businessType }) => {
    if (!!error) {
        return (<span className="error">{error}</span>)
    }

    return (
        <ul className="businesses-list">
            {results.map(business => (
                <BusinessItem 
                    key={business.id} 
                    user={user} 
                    businessType={businessType} 
                    {...business} 
                />)
            )}
        </ul>
    );
};

export default BusinessesList;
