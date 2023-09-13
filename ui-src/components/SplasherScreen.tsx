import React from 'react'

const SplasherScreen = () => {
    return (
        <div id="splashScreen" className="text-center">
            <div id="i-icon" style={{ paddingBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 40 40" fill="none">
                    <path d="M19.9999 36.6666C10.7952 36.6666 3.33325 29.2047 3.33325 20C3.33325 10.7952 10.7952 3.33331 19.9999 3.33331C29.2047 3.33331 36.6666 10.7952 36.6666 20C36.6565 29.2005 29.2005 36.6565 19.9999 36.6666ZM18.3333 28.3333V31.6666H21.6666V28.3333H18.3333ZM19.9999 11.6666C21.8409 11.6666 23.3333 13.159 23.3333 15C23.3391 15.8845 22.984 16.7332 22.3499 17.35L20.2833 19.45C19.0357 20.7028 18.3346 22.3985 18.3333 24.1666V25H21.6666C21.5371 23.2083 22.2597 21.4604 23.6166 20.2833L25.1166 18.75C26.1134 17.7572 26.6715 16.4068 26.6666 15C26.6666 11.3181 23.6818 8.33331 19.9999 8.33331C16.318 8.33331 13.3333 11.3181 13.3333 15H16.6666C16.6666 13.159 18.159 11.6666 19.9999 11.6666Z" fill="#2DC071" />
                </svg>
            </div>
            <p className="h5 text-color" style={{ paddingBottom: '15px' }}>No selected frame or image misses export settings: </p>
            <p className="p text-color" style={{ paddingBottom: '5px' }}>1 - Select a frame or an image layer</p>
            <p className="p text-color" style={{ paddingBottom: '5px' }}>2 - Click + in the export section </p>
            <p className="p text-color" style={{ paddingBottom: '5px' }}>3 - Add your Export Settings</p>
        </div>
    )
}

export default SplasherScreen