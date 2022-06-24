import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner({ text }) {
    return (
        <div>
            <Spinner animation="border" variant="primary" /> {text || "Loading"} ...
        </div>
    )
}
