import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HEADERS, CORS_HACK } from '../utils/yelp';

import './favorites.css';

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
        const promises = [];

        favorites.forEach(({ businessId }) => {
            const promise = new Promise((resolve, reject) => {
                axios.get(`${CORS_HACK}https://api.yelp.com/v3/businesses/${businessId}`, {
                    headers: HEADERS,
                }).then(({ data }) => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
            });

            promises.push(promise);
        });

        Promise.all(promises).then(values => {
            setDetailFavorites(values);
        });
    }, [favorites]);

    const removeFavorite = (foo, bar) => {
        console.log(foo, bar);
    };

    return (
        <div id="favorites-container">
            <ul className="business-items-container">
                {detailFavorites.map(business => (
                    <li
                        className="business-item"
                        style={{ backgroundImage: 'url(business.image_url)' }}>
                        {/* <div
                            className="btn-remove-favorite"
                            onClick={removeFavorite.bind(this, business.id)}>
                            Remove Favorites
                        </div> */}
                        <span>{business.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;
