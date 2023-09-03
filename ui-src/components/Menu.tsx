import React from 'react'

const Menu = () => {
    return (
        <div className="d-flex flex-column justify-content-start align-items-start w-100">
            <div className="navbar light-background-color border-bottom border-light-gray-2 d-flex flex-row justify-content-start align-items-start w-100"
                style={{ marginTop: 0, padding: "10px 20px 10px 20px" }}>
                <a className="link text-color active" href="#" data-block="images_container">Home</a>
            </div>
        </div>
    )
}

export default Menu