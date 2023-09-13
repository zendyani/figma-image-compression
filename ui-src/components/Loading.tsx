import React from 'react'

const Loading = () => {
    return (
        <div className="LoadingBox">
            <div className="rotateIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <path d="M12 60.0001V39H33L23.349 48.66C26.6789 52.0651 31.2374 53.9892 36 54C43.6183 53.9888 50.4046 49.1827 52.944 42H52.998C53.3416 41.0239 53.6016 40.0202 53.775 39H59.811C58.2992 50.9997 48.0946 59.9996 36 60.0001H35.97C29.6063 60.019 23.4995 57.4912 19.011 52.98L12 60.0001ZM18.222 33H12.186C13.6972 21.0048 23.895 12.0064 35.985 11.9999H36C42.3649 11.9795 48.4732 14.5075 52.962 19.02L60 11.9999V33H39L48.666 23.34C45.3327 19.9309 40.7679 18.0064 36 18C28.3817 18.0112 21.5954 22.8173 19.056 30H19.002C18.6557 30.9753 18.3957 31.9792 18.225 33H18.222Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Loading