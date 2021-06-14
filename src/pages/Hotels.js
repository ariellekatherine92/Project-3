import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { LocationForm, BusinessesList, LinkBackHome } from '../components';
import { HEADERS, CORS_HACK } from '../utils/yelp';

const YELP_HOTELS_URL = 'https://api.yelp.com/v3/businesses/search?term=hotel';

const Hotels = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const fetchHotels = useCallback(location => {
        setError(null);

        axios.get(`${CORS_HACK}${YELP_HOTELS_URL}&location=${location}`, {
            headers: HEADERS,
        }).then(({ data }) => {
            console.log(data);
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

    return(
        <div id="hotels-container">
            <LinkBackHome />
            <h2>Search Hotels</h2>
            <LocationForm fetchResults={fetchHotels} />
            <BusinessesList results={results} error={error} />
        </div>
    );
};

export default Hotels;
