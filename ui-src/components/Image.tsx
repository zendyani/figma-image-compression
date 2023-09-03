import React from 'react'
import CheckSuccess from "../img/icons/check-success.svg?raw"
import Icon12 from "../img/icons/icon-12.svg?raw"
import "./Image.css"

const Image = () => {
    return (
        <div className="image-container">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label second-text-color">Name</label>
            </div>

            <div className="image-details">
                <small className="small second-text-color">PNG</small>
                <h6 className="h6 second-text-color" style={{ marginLeft: '15px' }}>1.5 MB</h6>
                <img className="rotate loading-icon" src={`data:image/svg+xml;utf8,${Icon12}`} alt="" />
                <img className="success-icon" src={`data:image/svg+xml;utf8,${CheckSuccess}`} alt="" />
            </div>
        </div>
    )
}

export default Image