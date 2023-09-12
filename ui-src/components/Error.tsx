import React from 'react'

interface Props {
    title: string;
    message: string;
}

const Error = () => {
    return (
        <div className="dangerNote danger-color" style={{ padding: '10px 20px' }}>
            <p className="light-text-color">
                <strong style={{ fontWeight: '900' }}>Exceeded Size Limitation: </strong>Ensure image is under 4 MB.
            </p>
        </div>
    )
}

export default Error