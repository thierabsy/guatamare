import React from 'react';

const Posted = ({action}) => {
    return(
        <div className="Posted">
            <div className="row">
                <div className="col col-sm-2 icon" >
                    <i className="fas fa-check" /> 
                </div>
                <div className="col col-sm-10 text">
                  <strong> Votre { action }</strong> <br/> a été envoyée avec succès. <br/>  MERCI!
                </div>
            </div>
            <audio src="son.wav" autoPlay={true} />
        </div>
    )
}

export default Posted;