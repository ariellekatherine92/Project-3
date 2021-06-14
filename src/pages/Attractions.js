import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { LocationForm, BusinessesList, LinkBackHome } from '../components';
import { HEADERS, CORS_HACK } from '../utils/yelp';

const YELP_ATTRACTIONS_URL = 'https://api.yelp.com/v3/businesses/search?term=attraction';

const Attractions = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const fetchAttractions = useCallback(location => {
        setError(null);

        axios.get(`${CORS_HACK}${YELP_ATTRACTIONS_URL}&location=${location}`, {
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
        <div id="attractions-container">
            <LinkBackHome />
            <h2>Search Attractions</h2>
            <LocationForm fetchResults={fetchAttractions} />
            <BusinessesList results={results} error={error} />
        </div>
    );
};

export default Attractions;
