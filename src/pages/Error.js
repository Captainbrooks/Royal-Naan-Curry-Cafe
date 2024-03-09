// In your error page component
import React from 'react';
import { useLocation } from 'react-router-dom';

function Error() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const errorMessage = searchParams.get('message');

    return (
        <div>
            <h2>Error</h2>
            <p>{errorMessage}</p>
        </div>
    );
}

export default Error;
