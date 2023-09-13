import React from 'react'

export type ErrorType = "size" | "format"

const errors = {
    "size": {
        'title': 'Exceeded Size Limit',
        'message': 'Ensure image is under 4 MB',
    },
    "format": {
        'title': 'PDF Format not Supported',
        'message': 'Ensure frame is JPG or PNG',
    },
}

interface Props {
    type: ErrorType;
}

const Error = ({ type }: Props) => {
    return (
        <div className="image-container danger-color" style={{
            padding: '10px 20px',
            height: '22px'
        }}>
            <p className="light-text-color">
                <strong style={{ fontWeight: '900' }}>{errors[type].title}: </strong>{errors[type].message}.
            </p>
        </div>
    )
}

export default Error