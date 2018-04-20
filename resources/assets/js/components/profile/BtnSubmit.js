import React from 'react';

const BtnSubmit = ({condition, btnAction}) => {
    return(
        <div className="BtnSubmit">
                {condition ?
                    <div className="btnWrapper">
                        <button 
                            // type="submit" 
                            className="btn btn-success" 
                            onClick={ (e)=> btnAction(e) }
                        >
                            <i className="fab fa-telegram-plane" /> Aperçu
                        </button>
                    </div>
                :
                    <div className="btnWrapper">
                        <button 
                            // type="submit" 
                            className="btn btn-success" 
                            disabled={true} 
                        >
                            <i className="fab fa-telegram-plane" /> Aperçu
                        </button>
                    </div>
                }
        </div>
    )
}

export default BtnSubmit;