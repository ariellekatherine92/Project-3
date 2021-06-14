import React, { useCallback, useState } from 'react';
import axios from 'axios';

const LocationForm = ({ fetchResults }) => {
    const [locationValue, setLocationValue] = useState('');

    const handleLocationChange = useCallback(e => {
        setLocationValue(e.target.value);
    }, []);

    const searchLocation = useCallback(e => {
        e.preventDefault();

        fetchResults(locationValue);
    }, [locationValue, fetchResults]);

    return(
        <form>
            <input
                type="text"
                onChange={handleLocationChange}
            />
            <button
                onClick={searchLocation}>
                Search
            </button>
        </form>
    )
};

export default LocationForm;
