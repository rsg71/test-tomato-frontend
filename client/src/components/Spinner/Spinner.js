import React from 'react'

export default function Spinner({text}) {
    return (
        <div>
            <Spinner animation="border" variant="primary" /> {text || "Loading"} ...
        </div>
    )
}
