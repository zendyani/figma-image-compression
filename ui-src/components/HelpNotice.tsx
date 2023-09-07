import React from 'react'

const HelpNotice = () => {
    return (
        <div className="hover-color d-flex flex-row justify-content-between align-items-center w-100"
            style={{ padding: '10px 20px' }}>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="d-flex flex-column justify-content-start align-items-start" style={{ marginLeft: '10px' }}>
                    <p className="light-text-color">- Please ensure that each image does not exceed 4 MB.</p>
                    <p className="light-text-color">- Set export settings for your desired image/frame.</p>
                </div>
            </div>
        </div>
    )
}

export default HelpNotice