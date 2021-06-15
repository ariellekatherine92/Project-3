import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HEADERS, CORS_HACK } from '../utils/yelp';

const Favorites = props => {
    const [favorites, setFavorites] = useState([]);
    const [detailFavorites, setDetailFavorites] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favorites`).then(({ data }) => {
            setFavorites(data.favorites);
        }, error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        let newDetailFavorites = [];

        favorites.forEach(({ businessId }) => {
            axios.get(`${CORS_HACK}https://api.yelp.com/v3/businesses/${businessId}`, {
                headers: HEADERS,
            }).then(({ data }) => {
                newDetailFavorites.push(data);
            }, error => {
                console.error(error);
            });
        });

        setDetailFavorites(newDetailFavorites);
    }, [favorites]);

    return (
        <ul>
            {detailFavorites.map(business => (
                <li
                    style={{ 
                        backgroundImage: business.image_url,
                        height: '200px',
                        width: '200px',
                        backgroundSize: 'cover',
                    }}>
                    {business.name}
                </li>
            ))}
        </ul>
    );
};

export default Favorites;
