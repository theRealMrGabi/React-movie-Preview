import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './Error.styles';
import error404 from './Error404.png';

const ErrorDisplay = () => {
    return (
        <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={error404} />
            <ErrorImageText>Sorry, this page is broken and burnt to a crisp</ErrorImageText>
        </ErrorImageOverlay>
    )
}

export default ErrorDisplay ;