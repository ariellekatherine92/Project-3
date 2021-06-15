import React, { useCallback, useState } from 'react';

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
                className="location-input"
                onChange={handleLocationChange}
            />
            <button
                className="search-location-button"
                onClick={searchLocation}>
                Search
            </button>
        </form>
    )
};

export default LocationForm;
