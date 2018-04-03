import React from 'react';

const Smiler = ({children}) => {
    let hours = new Date().getHours();
    return(
        <div className="smile">
            {children}
            <span className="bb" > 
                { hours < 13 && hours > 6  ? 
                        "Bonjour" :
                    hours < 20 && hours >= 13  ? 
                        "Bon après-midi"
                    : 
                        "Bonsoir" 
                } 
            </span>
        </div>
    )
}

export default Smiler;