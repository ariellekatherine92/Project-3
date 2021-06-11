import React from 'react';

const BusinessItem = props => {
    console.log(props);
    return (
        <li>{props.name}</li>
    );
};

const BusinessesList = ({ yelpResults }) => {
    return (<ul>{yelpResults.map(business => (<BusinessItem key={business.id} {...business} />))}</ul>);
};

export default BusinessesList;
