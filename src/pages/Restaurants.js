import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { LocationForm, BusinessesList, LinkBackHome } from '../components';
import { HEADERS, CORS_HACK } from '../utils/yelp';

const YELP_RESTAURANTS_URL = 'https://api.yelp.com/v3/businesses/search?term=restaurant';

const Restaurants = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const fetchRestaurants = useCallback(location => {
        setError(null);

        axios.get(`${CORS_HACK}${YELP_RESTAURANTS_URL}&location=${location}`, {
            headers: HEADERS,
        }).then(({ data }) => {
            if (Array.isArray(data?.businesses)) {
                setResults(data.businesses);
            }
        }).catch(error => {
            if (!!error?.response?.data?.error?.description) {
                setError(error.response.data.error.description);
            }
            console.error(error);
        });
    }, []);

    return (
        <div id="restaurants-container">
            <LinkBackHome />
            <h2>Search Restaurants</h2>
            <LocationForm fetchResults={fetchRestaurants} />
            <BusinessesList results={results} error={error} />
        </div>
    );
};

export default Restaurants;
