import React from 'react';

const BtnSubmit = ({condition}) => {
    return(
        <div className="BtnSubmit">
                {condition ?
                    <div className="btnWrapper">
                        <button 
                            type="submit" 
                            className="btn btn-success" 
                        >
                            <i className="fab fa-telegram-plane" /> Envoyer
                        </button>
                    </div>
                :
                    <div className="btnWrapper">
                        <button 
                            type="submit" 
                            className="btn btn-success" 
                            disabled={true} 
                        >
                            <i className="fab fa-telegram-plane" /> Envoyer
                        </button>
                    </div>
                }
        </div>
    )
}

export default BtnSubmit;