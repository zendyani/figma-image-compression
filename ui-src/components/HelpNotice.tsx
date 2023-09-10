import React from 'react'

const HelpNotice = () => {
    return (
        <div className="hover-color d-flex flex-row justify-content-between align-items-center w-100"
            style={{ padding: '10px 20px' }}>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <div className="d-flex flex-column justify-content-start align-items-start" style={{ marginLeft: '10px' }}>
                    <p className="light-text-color">- Configure export settings for the intended image/frame.</p>
                    <p className="light-text-color">- Ensure images are under 4 MB in size.</p>
                    <p className="light-text-color">- Note that PDFs are not supported.</p>
                </div>
            </div>
        </div>
    )
}

export default HelpNotice