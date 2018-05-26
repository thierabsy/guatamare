import React from 'react';

const Posted = ({error}) => {
    return(
        <div className={ error ? "Posted error" : "Posted" } >
            <div className="row">
                <div className="col col-sm-2 icon" >

                    { error ? 
                        <i className="fas fa-exclamation-triangle" /> 
                    : 
                        <i className="fas fa-check success_icon" /> 
                    } 
                </div>
                <div className="col col-sm-10 colText">
                    <div className="text">
                        { error ? 
                            <span>
                                <strong> Votre requête</strong> <br/> 
                                    a échouée. <br/>  
                                    <strong> VEUILLEZ REMPLIR TOUS LES CHAMPS. </strong>
                                    <audio  
                                        src="son_error.mp3" 
                                        autoPlay={true} 
                                        volume={0.5}
                                    />
                            </span> 
                        :
                            <span> 
                                <strong> Votre requête </strong> <br/> 
                                    a été envoyée avec succès. <br/>  
                                    MERCI!!!
                                    <audio 
                                        src="son_success.wav" 
                                        autoPlay={true} 
                                        volume={0.5}
                                    />
                            </span> 
                        }
                    {/* <strong> Votre { action }</strong> <br/> a été envoyée avec succès. <br/>  MERCI! */}
                    </div>
                </div>
            </div>
           </div>
    )
}

export default Posted;