import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>oops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
     
                <i>{error.statusText || error.message}</i>
          
            </p>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;